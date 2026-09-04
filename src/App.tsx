import React, { useState, useMemo, useEffect } from 'react';
import { 
  ALL_KERALA_PLACES, 
  DISTRICT_INFO, 
  INITIAL_BUSINESSES 
} from './data/places';
import { 
  saveBusinessToFirestore, 
  addReviewToFirestore, 
  subscribeToBusinessesFromFirestore,
  subscribeToAuth,
  logoutUser
} from './lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { 
  PlaceItem, 
  KeralaDistrict, 
  PlaceCategory, 
  BusinessListing, 
  BusinessCategory, 
  UserReview 
} from './types';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryNav } from './components/CategoryNav';
import { DistrictBar } from './components/DistrictBar';
import { PlaceCard } from './components/PlaceCard';
import { BusinessCard } from './components/BusinessCard';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { EnrichPlaceModal } from './components/EnrichPlaceModal';
import { EnquiryModal } from './components/EnquiryModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { ExportModal } from './components/ExportModal';
import { RegisterBusinessModal } from './components/RegisterBusinessModal';
import { BusinessDetailModal } from './components/BusinessDetailModal';
import { AuthModal } from './components/AuthModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { 
  LayoutGrid, 
  List, 
  Sparkles, 
  CheckCircle, 
  RotateCcw,
  Search,
  MapPin,
  ChevronRight,
  Store,
  Navigation,
  Plus,
  Phone,
  MessageSquare,
  Database,
  ShieldCheck,
  Building2
} from 'lucide-react';

const LOCAL_STORAGE_PLACES_KEY = 'keraladial_enriched_places';
const LOCAL_STORAGE_BOOKMARKS_KEY = 'keraladial_bookmarks';
const LOCAL_STORAGE_BUSINESSES_KEY = 'keraladial_registered_businesses';
const ITEMS_PER_PAGE = 24;

export default function App() {
  // Firebase Auth State
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authPrompt, setAuthPrompt] = useState<{ title?: string; message?: string }>({});
  const [showMyListingsOnly, setShowMyListingsOnly] = useState(false);

  // Subscribe to Firebase Auth state
  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);
  // Places state with local storage overrides
  const [places, setPlaces] = useState<PlaceItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PLACES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const map = new Map<string, PlaceItem>();
          ALL_KERALA_PLACES.forEach((p) => map.set(p.id, p));
          parsed.forEach((p: PlaceItem) => map.set(p.id, p));
          return Array.from(map.values());
        }
      }
    } catch {
      // Fallback
    }
    return ALL_KERALA_PLACES;
  });

  // Registered Businesses state with Firebase Firestore sync and local fallback
  const [businesses, setBusinesses] = useState<BusinessListing[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_BUSINESSES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Purge all old fake/mock business IDs
          const clean = parsed.filter((b: BusinessListing) => 
            b && b.id && 
            !b.id.startsWith('biz-koodathai-spices') &&
            !b.id.startsWith('biz-thamarassery-clinic') &&
            !b.id.startsWith('biz-calicut-paragon') &&
            !b.id.startsWith('biz-bekal-resort') &&
            !b.id.startsWith('biz-kochi-taxi') &&
            !b.id.startsWith('biz-munnar-plantation') &&
            !b.id.startsWith('biz-alappuzha-houseboats')
          );
          localStorage.setItem(LOCAL_STORAGE_BUSINESSES_KEY, JSON.stringify(clean));
          return clean;
        }
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(true);

  // Real-time synchronization with Firebase Firestore
  useEffect(() => {
    const unsubscribe = subscribeToBusinessesFromFirestore(
      (firestoreList) => {
        // Exclude any legacy mock items if present
        const cleanList = firestoreList.filter((b) => 
          b && b.id && 
          !b.id.startsWith('biz-koodathai-spices') &&
          !b.id.startsWith('biz-thamarassery-clinic') &&
          !b.id.startsWith('biz-calicut-paragon') &&
          !b.id.startsWith('biz-bekal-resort') &&
          !b.id.startsWith('biz-kochi-taxi') &&
          !b.id.startsWith('biz-munnar-plantation') &&
          !b.id.startsWith('biz-alappuzha-houseboats')
        );
        setBusinesses(cleanList);
        setIsFirebaseConnected(true);
        try {
          localStorage.setItem(LOCAL_STORAGE_BUSINESSES_KEY, JSON.stringify(cleanList));
        } catch {
          // ignore
        }
      },
      (error) => {
        console.warn('Firebase Firestore notice:', error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  // Bookmarks state
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_BOOKMARKS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return new Set<string>(parsed);
      }
    } catch {
      // fallback
    }
    return new Set<string>();
  });

  // Search & Filter State
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<'All' | KeralaDistrict>('All');
  const [searchTab, setSearchTab] = useState<'all' | 'places' | 'businesses'>('all');
  const [selectedPlaceCategory, setSelectedPlaceCategory] = useState<PlaceCategory>('All');
  const [selectedBusinessCategory, setSelectedBusinessCategory] = useState<BusinessCategory>('All');
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'name-asc' | 'name-desc' | 'district'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState<number>(1);

  // Modals & Drawers
  const [detailModalPlace, setDetailModalPlace] = useState<PlaceItem | null>(null);
  const [selectedBusinessDetail, setSelectedBusinessDetail] = useState<BusinessListing | null>(null);
  const [isRegisterBusinessOpen, setIsRegisterBusinessOpen] = useState(false);
  const [enquiryPlace, setEnquiryPlace] = useState<PlaceItem | null>(null);
  const [isEnrichModalOpen, setIsEnrichModalOpen] = useState(false);
  const [enrichPlaceTarget, setEnrichPlaceTarget] = useState<PlaceItem | null>(null);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  // Check for shared business link in URL params or hash
  useEffect(() => {
    const handleUrlCheck = () => {
      const params = new URLSearchParams(window.location.search);
      const bizParam = params.get('biz');
      const hash = window.location.hash.replace('#', '');
      const targetId = bizParam || (hash.startsWith('biz-') ? hash : null);

      if (targetId && businesses.length > 0) {
        const found = businesses.find((b) => b.id === targetId);
        if (found) {
          setSelectedBusinessDetail(found);
          setSearchTab('businesses');
        }
      }
    };

    handleUrlCheck();
    window.addEventListener('hashchange', handleUrlCheck);
    return () => window.removeEventListener('hashchange', handleUrlCheck);
  }, [businesses]);

  // Handle Bookmarks
  const handleToggleBookmark = (place: PlaceItem) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(place.id)) {
        next.delete(place.id);
        showToast(`Removed "${place.name}" from saved list`);
      } else {
        next.add(place.id);
        showToast(`Saved "${place.name}" to bookmarks`);
      }
      try {
        localStorage.setItem(LOCAL_STORAGE_BOOKMARKS_KEY, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Register New Business directly to Firebase Firestore
  const handleRegisterBusiness = async (newBiz: BusinessListing) => {
    setBusinesses((prev) => {
      const updated = [newBiz, ...prev.filter((b) => b.id !== newBiz.id)];
      try {
        localStorage.setItem(LOCAL_STORAGE_BUSINESSES_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });

    showToast(`Saving "${newBiz.name}" to Live Directory...`);

    const res = await saveBusinessToFirestore(newBiz);
    if (res.success) {
      showToast(`"${newBiz.name}" is now live in directory!`);
    } else {
      showToast(`Saved locally (${res.error || 'Offline mode'})`);
    }
  };

  // Submit Feedback / Review for a Business
  const handleAddReview = async (businessId: string, review: UserReview) => {
    const currentBiz = businesses.find((b) => b.id === businessId);
    const existingReviews = currentBiz ? currentBiz.reviews : [];

    setBusinesses((prev) => {
      const updated = prev.map((b) => {
        if (b.id !== businessId) return b;
        const newReviews = [review, ...b.reviews];
        const totalRating = newReviews.reduce((sum, r) => sum + r.rating, 0);
        const newAverage = totalRating / newReviews.length;
        return {
          ...b,
          rating: Number(newAverage.toFixed(1)),
          reviews: newReviews
        };
      });

      try {
        localStorage.setItem(LOCAL_STORAGE_BUSINESSES_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });

    setSelectedBusinessDetail((curr) => {
      if (!curr || curr.id !== businessId) return curr;
      const newReviews = [review, ...curr.reviews];
      const totalRating = newReviews.reduce((sum, r) => sum + r.rating, 0);
      return {
        ...curr,
        rating: Number((totalRating / newReviews.length).toFixed(1)),
        reviews: newReviews
      };
    });

    showToast('Submitting feedback to Firebase...');
    const res = await addReviewToFirestore(businessId, review, existingReviews);
    if (res.success) {
      showToast('Feedback submitted and synced with database!');
    }
  };

  // Auth Action Handlers
  const handleSignOut = async () => {
    const res = await logoutUser();
    if (res.success) {
      setShowMyListingsOnly(false);
      showToast('Signed out from Firebase');
    }
  };

  const handleOpenAuth = (title?: string, message?: string) => {
    setAuthPrompt({ title, message });
    setIsAuthModalOpen(true);
  };

  // Save enriched or added place
  const handleSavePlace = (updatedPlace: PlaceItem) => {
    setPlaces((prev) => {
      const exists = prev.some((p) => p.id === updatedPlace.id);
      let nextList: PlaceItem[];
      if (exists) {
        nextList = prev.map((p) => (p.id === updatedPlace.id ? updatedPlace : p));
      } else {
        nextList = [updatedPlace, ...prev];
      }
      try {
        localStorage.setItem(LOCAL_STORAGE_PLACES_KEY, JSON.stringify(nextList));
      } catch {
        // ignore
      }
      return nextList;
    });
    showToast(`Updated "${updatedPlace.name}"`);
  };

  // Dynamic counts for all 14 districts
  const districtCounts = useMemo(() => {
    const counts: Record<KeralaDistrict, number> = {
      Kasaragod: 0,
      Kannur: 0,
      Wayanad: 0,
      Kozhikode: 0,
      Malappuram: 0,
      Palakkad: 0,
      Thrissur: 0,
      Ernakulam: 0,
      Idukki: 0,
      Kottayam: 0,
      Alappuzha: 0,
      Pathanamthitta: 0,
      Kollam: 0,
      Thiruvananthapuram: 0
    };

    places.forEach((p) => {
      if (counts[p.district] !== undefined) {
        counts[p.district]++;
      }
    });
    return counts;
  }, [places]);

  // Dynamic counts for place categories
  const placeCategoryCounts = useMemo(() => {
    const counts: Record<PlaceCategory, number> = {
      'All': 0,
      'Coastal & Beach': 0,
      'Heritage & Culture': 0,
      'Urban & Commercial': 0,
      'Town & Suburb': 0,
      'Village & Panchayat': 0,
      'Nature & Hills': 0,
      'Backwaters & Waterways': 0,
      'Tech & Knowledge Hub': 0
    };

    places.forEach((p) => {
      if (selectedDistrict === 'All' || p.district === selectedDistrict) {
        counts['All']++;
        if (counts[p.category] !== undefined) {
          counts[p.category]++;
        }
      }
    });
    return counts;
  }, [places, selectedDistrict]);

  // Dynamic counts for business categories
  const businessCategoriesList: Array<Exclude<BusinessCategory, 'All'>> = [
    'Restaurants & Cafes',
    'Hotels, Resorts & Homestays',
    'Hospitals, Clinics & Ayurveda',
    'Taxis & Travel Services',
    'Shopping, Retail & Spices',
    'Auto Care & Repairs',
    'Real Estate & Builders',
    'Education & Coaching',
    'Home & Professional Services',
    'IT & Digital Services'
  ];

  // Filtering Places
  const filteredPlaces = useMemo(() => {
    if (searchTab === 'businesses') return [];
    const q = query.trim().toLowerCase();

    return places.filter((p) => {
      if (selectedDistrict !== 'All' && p.district !== selectedDistrict) return false;
      if (selectedPlaceCategory !== 'All' && p.category !== selectedPlaceCategory) return false;

      if (q) {
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDistrict = p.district.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesNotable = p.notableFor.some((n) => n.toLowerCase().includes(q));
        const matchesNotes = p.userNotes ? p.userNotes.toLowerCase().includes(q) : false;

        return (
          matchesName ||
          matchesDistrict ||
          matchesCategory ||
          matchesTagline ||
          matchesDesc ||
          matchesNotable ||
          matchesNotes
        );
      }
      return true;
    });
  }, [places, query, selectedDistrict, selectedPlaceCategory, searchTab]);

  // Filtering Businesses
  const filteredBusinesses = useMemo(() => {
    if (searchTab === 'places') return [];
    const q = query.trim().toLowerCase();

    return businesses.filter((b) => {
      if (selectedDistrict !== 'All' && b.district !== selectedDistrict) return false;
      if (selectedBusinessCategory !== 'All' && b.businessCategory !== selectedBusinessCategory) return false;

      // Filter to only logged in user's businesses if requested
      if (showMyListingsOnly) {
        if (!currentUser) return false;
        const isOwner = b.ownerUid === currentUser.uid || 
          (currentUser.email && b.ownerEmail && b.ownerEmail.toLowerCase() === currentUser.email.toLowerCase());
        if (!isOwner) return false;
      }

      if (q) {
        const matchesName = b.name.toLowerCase().includes(q);
        const matchesCategory = b.businessCategory.toLowerCase().includes(q);
        const matchesLocality = b.locality.toLowerCase().includes(q);
        const matchesDistrict = b.district.toLowerCase().includes(q);
        const matchesDesc = b.description.toLowerCase().includes(q);
        const matchesServices = b.services.some((s) => s.toLowerCase().includes(q));
        const matchesPhone = b.phone.includes(q) || (b.whatsapp && b.whatsapp.includes(q));

        return (
          matchesName ||
          matchesCategory ||
          matchesLocality ||
          matchesDistrict ||
          matchesDesc ||
          matchesServices ||
          matchesPhone
        );
      }
      return true;
    });
  }, [businesses, query, selectedDistrict, selectedBusinessCategory, searchTab, showMyListingsOnly, currentUser]);

  // Unified items list with sorting
  type UnifiedItem = { type: 'place'; data: PlaceItem } | { type: 'business'; data: BusinessListing };

  const unifiedList = useMemo<UnifiedItem[]>(() => {
    const combined: UnifiedItem[] = [];

    if (searchTab === 'all') {
      // Interleave or put businesses first for commercial relevance, followed by places
      filteredBusinesses.forEach((b) => combined.push({ type: 'business', data: b }));
      filteredPlaces.forEach((p) => combined.push({ type: 'place', data: p }));
    } else if (searchTab === 'businesses') {
      filteredBusinesses.forEach((b) => combined.push({ type: 'business', data: b }));
    } else if (searchTab === 'places') {
      filteredPlaces.forEach((p) => combined.push({ type: 'place', data: p }));
    }

    if (sortBy === 'name-asc') {
      combined.sort((a, b) => a.data.name.localeCompare(b.data.name));
    } else if (sortBy === 'name-desc') {
      combined.sort((a, b) => b.data.name.localeCompare(a.data.name));
    } else if (sortBy === 'district') {
      combined.sort((a, b) => a.data.district.localeCompare(b.data.district) || a.data.name.localeCompare(b.data.name));
    } else if (sortBy === 'rating') {
      combined.sort((a, b) => {
        const ratingA = a.type === 'business' ? a.data.rating : 4.5;
        const ratingB = b.type === 'business' ? b.data.rating : 4.5;
        return ratingB - ratingA;
      });
    }

    return combined;
  }, [filteredPlaces, filteredBusinesses, searchTab, sortBy]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [query, selectedDistrict, searchTab, selectedPlaceCategory, selectedBusinessCategory, sortBy]);

  const displayedItems = useMemo(() => {
    return unifiedList.slice(0, page * ITEMS_PER_PAGE);
  }, [unifiedList, page]);

  const hasMore = displayedItems.length < unifiedList.length;

  const bookmarkedPlacesList = useMemo(() => {
    return places.filter((p) => bookmarks.has(p.id));
  }, [places, bookmarks]);

  const handleSharePlace = (place: PlaceItem) => {
    const text = `${place.name}, ${place.district} on KeralaDial - ${place.tagline}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(`Copied info for "${place.name}"`);
    }
  };

  const handleResetFilters = () => {
    setQuery('');
    setSelectedDistrict('All');
    setSelectedPlaceCategory('All');
    setSelectedBusinessCategory('All');
    setSearchTab('all');
    setSortBy('relevance');
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-5 right-5 z-50 bg-neutral-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-neutral-700 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header with Register Business, Saved, and Auth */}
      <Header
        onAddPlaceClick={() => {
          setEnrichPlaceTarget(null);
          setIsEnrichModalOpen(true);
        }}
        onRegisterBusinessClick={() => setIsRegisterBusinessOpen(true)}
        onBookmarksClick={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarks.size}
        onExportClick={() => setIsExportOpen(true)}
        onEnquiryClick={() => setEnquiryPlace(null)}
        currentUser={currentUser}
        onAuthClick={() => handleOpenAuth()}
        onSignOut={handleSignOut}
        onMyListingsClick={() => {
          setSearchTab('businesses');
          setShowMyListingsOnly(true);
          showToast('Showing your registered businesses');
        }}
      />

      {/* 14 District Navigation Bar */}
      <DistrictBar
        selectedDistrict={selectedDistrict}
        onSelectDistrict={setSelectedDistrict}
        districtCounts={districtCounts}
        totalCount={places.length}
      />

      {/* Search Engine Centerpiece */}
      <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent pt-8 pb-6 px-4 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 text-amber-900 text-xs font-semibold shadow-2xs flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free Public Search &bull; No Signup Required</span>
            </span>
            <span className="text-neutral-300 hidden sm:inline">&bull;</span>
            <span className="text-neutral-600">All 14 Districts &bull; 800+ Places &amp; Towns</span>
            <span className="text-neutral-300 hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-600 font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Cloud Directory</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Find Any Place or Business in <span className="text-amber-600">Kerala</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
            Instant search across 800+ localities, panchayats, and real registered businesses in Kerala. No signup needed to search, view phone numbers, or WhatsApp.
          </p>

          {/* Central Search Bar */}
          <div className="pt-2">
            <SearchBar
              query={query}
              onQueryChange={setQuery}
              selectedDistrict={selectedDistrict}
              onDistrictChange={setSelectedDistrict}
              places={places}
              businesses={businesses}
              onSelectPlace={(p) => setDetailModalPlace(p)}
              onSelectBusiness={(b) => setSelectedBusinessDetail(b)}
              onOpenRegister={() => setIsRegisterBusinessOpen(true)}
            />
          </div>

          {/* Search Mode Switcher Tabs */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setSearchTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                searchTab === 'all'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              All Listings ({filteredPlaces.length + filteredBusinesses.length})
            </button>

            <button
              onClick={() => setSearchTab('businesses')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                searchTab === 'businesses'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Businesses &amp; Services ({filteredBusinesses.length})</span>
            </button>

            <button
              onClick={() => setSearchTab('places')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                searchTab === 'places'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Places &amp; Localities ({filteredPlaces.length})</span>
            </button>
          </div>

          {/* Business Category Pills when on Businesses tab */}
          {searchTab === 'businesses' && (
            <div className="pt-2 flex items-center justify-center gap-1.5 flex-wrap max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedBusinessCategory('All')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedBusinessCategory === 'All'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                All Businesses
              </button>
              {businessCategoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedBusinessCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedBusinessCategory === cat
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'bg-white text-neutral-700 hover:bg-emerald-50 border border-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Place Category Navigation when on Places tab */}
          {searchTab === 'places' && (
            <div className="pt-2 max-w-5xl mx-auto">
              <CategoryNav
                selectedCategory={selectedPlaceCategory}
                onSelectCategory={setSelectedPlaceCategory}
                categoryCounts={placeCategoryCounts}
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Results Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {/* Results Bar */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-4 mb-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-neutral-900">
              Showing {unifiedList.length} {unifiedList.length === 1 ? 'result' : 'results'}
            </span>
            {selectedDistrict !== 'All' && (
              <span className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">
                in {selectedDistrict}
              </span>
            )}
            {query && (
              <span className="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full">
                &ldquo;{query}&rdquo;
              </span>
            )}
            {showMyListingsOnly && (
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>My Registered Businesses</span>
                <button
                  onClick={() => setShowMyListingsOnly(false)}
                  className="hover:text-emerald-950 font-bold ml-1 cursor-pointer"
                  title="Clear filter"
                >
                  &times;
                </button>
              </span>
            )}

            {(selectedDistrict !== 'All' || query || selectedPlaceCategory !== 'All' || selectedBusinessCategory !== 'All' || showMyListingsOnly) && (
              <button
                onClick={() => {
                  handleResetFilters();
                  setShowMyListingsOnly(false);
                }}
                className="text-xs text-amber-700 hover:text-amber-900 hover:underline flex items-center gap-1 font-semibold ml-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset filters
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Register Business */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => setIsRegisterBusinessOpen(true)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Register Business</span>
            </button>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-neutral-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-neutral-50 border border-neutral-300 rounded-lg px-2.5 py-1.5 text-neutral-800 text-xs font-medium focus:outline-hidden focus:border-amber-600 cursor-pointer"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Top Rated</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="district">By District</option>
              </select>
            </div>

            <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {unifiedList.length === 0 ? (
          searchTab === 'businesses' && businesses.length === 0 ? (
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xs">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <Store className="w-8 h-8" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Live Kerala Directory</span>
              </div>
              <h3 className="font-bold text-neutral-900 text-xl mb-2 font-display">
                All Mock Businesses Removed &bull; Ready for Real Registrations
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                All fake sample businesses have been removed as requested. You can now register any real business in Kerala (stores, clinics, homestays, taxis, repair shops, restaurants) with direct phone, WhatsApp, and operating hours.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsRegisterBusinessOpen(true)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2 active:scale-98"
                >
                  <Plus className="w-4 h-4" />
                  <span>Register First Business</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center max-w-lg mx-auto shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1 font-display">
                {query ? `No results found for "${query}"` : 'No listings found for this filter'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mb-5 leading-relaxed">
                No matching locality or business found in {selectedDistrict === 'All' ? 'Kerala' : selectedDistrict}. You can register this place or business now with direct contact information!
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setIsRegisterBusinessOpen(true)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Register Business</span>
                </button>
                <button
                  onClick={() => {
                    setEnrichPlaceTarget(null);
                    setIsEnrichModalOpen(true);
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  + Add Place / Locality
                </button>
              </div>
            </div>
          )
        ) : (
          <>
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
                  : 'space-y-3'
              }
            >
              {displayedItems.map((item) => {
                if (item.type === 'business') {
                  return (
                    <BusinessCard
                      key={item.data.id}
                      business={item.data}
                      onViewDetails={(b) => setSelectedBusinessDetail(b)}
                      onLeaveFeedback={(b) => setSelectedBusinessDetail(b)}
                    />
                  );
                } else {
                  return (
                    <PlaceCard
                      key={item.data.id}
                      place={item.data}
                      viewMode={viewMode}
                      onViewDetails={(p) => setDetailModalPlace(p)}
                      onEnquire={(p) => setEnquiryPlace(p)}
                      onToggleBookmark={handleToggleBookmark}
                      isBookmarked={bookmarks.has(item.data.id)}
                      onShare={handleSharePlace}
                      onEnrich={(p) => {
                        setEnrichPlaceTarget(p);
                        setIsEnrichModalOpen(true);
                      }}
                    />
                  );
                }
              })}
            </div>

            {/* Pagination / Load More */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="px-8 py-3 bg-white border-2 border-neutral-300 hover:border-amber-600 hover:bg-amber-50/50 text-neutral-900 font-semibold text-sm rounded-xl shadow-xs transition-all cursor-pointer inline-flex items-center gap-2 active:scale-98"
                >
                  <span>Load More Listings ({unifiedList.length - displayedItems.length} remaining)</span>
                  <ChevronRight className="w-4 h-4 text-amber-600" />
                </button>
                <div className="text-xs text-neutral-400 mt-2">
                  Showing {displayedItems.length} of {unifiedList.length} items
                </div>
              </div>
            )}
          </>
        )}

        {/* Business Registration Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-200">
              Are you a Business Owner or Service Provider in Kerala?
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              List Your Business on KeralaDial for Free
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
              Add your store, clinic, homestay, taxi, or trade service with phone number, WhatsApp, timings, and location so customers across all 14 districts can find and contact you.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsRegisterBusinessOpen(true)}
              className="px-5 py-2.5 bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <Store className="w-4 h-4 text-emerald-700" />
              <span>Register Business Now</span>
            </button>
            <button
              onClick={() => setIsExportOpen(true)}
              className="px-4 py-2.5 bg-emerald-900/60 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer border border-emerald-500/40"
            >
              Export Directory
            </button>
          </div>
        </div>
      </main>

      {/* Place Detail Modal */}
      <PlaceDetailModal
        place={detailModalPlace}
        onClose={() => setDetailModalPlace(null)}
        onEnquire={(p) => setEnquiryPlace(p)}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={detailModalPlace ? bookmarks.has(detailModalPlace.id) : false}
        onEnrich={(p) => {
          setEnrichPlaceTarget(p);
          setIsEnrichModalOpen(true);
        }}
      />

      {/* Business Detail & Reviews/Feedback Modal */}
      <BusinessDetailModal
        business={selectedBusinessDetail}
        isOpen={selectedBusinessDetail !== null}
        onClose={() => setSelectedBusinessDetail(null)}
        onAddReview={handleAddReview}
        currentUser={currentUser}
      />

      {/* Register Business Modal */}
      <RegisterBusinessModal
        isOpen={isRegisterBusinessOpen}
        onClose={() => setIsRegisterBusinessOpen(false)}
        onRegister={handleRegisterBusiness}
        initialDistrict={selectedDistrict}
        currentUser={currentUser}
        onOpenAuth={() => handleOpenAuth('Sign In to Register Business', 'Sign in with your email or Google to register and link your business to your account.')}
        onViewBusiness={(biz) => {
          setIsRegisterBusinessOpen(false);
          setSelectedBusinessDetail(biz);
        }}
      />

      {/* Firebase Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onSuccess={(user) => {
          showToast(`Signed in as ${user.displayName || user.email || 'User'}`);
        }}
        promptTitle={authPrompt.title}
        promptMessage={authPrompt.message}
      />

      {/* Enrich Place Modal */}
      <EnrichPlaceModal
        place={enrichPlaceTarget}
        isOpen={isEnrichModalOpen}
        onClose={() => {
          setIsEnrichModalOpen(false);
          setEnrichPlaceTarget(null);
        }}
        onSave={handleSavePlace}
      />

      {/* Dial / Helpline Modal */}
      <EnquiryModal
        place={enquiryPlace}
        isOpen={enquiryPlace !== null}
        onClose={() => setEnquiryPlace(null)}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedPlaces={bookmarkedPlacesList}
        onRemoveBookmark={handleToggleBookmark}
        onSelectPlace={(p) => setDetailModalPlace(p)}
        onExport={() => setIsExportOpen(true)}
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        places={filteredPlaces}
      />

      {/* Footer */}
      <Footer
        onSelectDistrict={(d) => {
          setSelectedDistrict(d);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEnquiry={() => setEnquiryPlace(null)}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        searchTab={searchTab}
        onSelectTab={(tab) => setSearchTab(tab)}
        onOpenRegister={() => setIsRegisterBusinessOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarks.size}
        currentUser={currentUser}
        onOpenAuth={() => handleOpenAuth()}
        onScrollToSearch={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
