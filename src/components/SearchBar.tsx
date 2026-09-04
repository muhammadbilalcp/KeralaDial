import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  X, 
  ChevronDown, 
  Building2, 
  Navigation, 
  Phone, 
  Store, 
  CheckCircle2,
  Plus
} from 'lucide-react';
import { KeralaDistrict, PlaceItem, BusinessListing } from '../types';

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  selectedDistrict: 'All' | KeralaDistrict;
  onDistrictChange: (d: 'All' | KeralaDistrict) => void;
  places: PlaceItem[];
  businesses: BusinessListing[];
  onSelectPlace: (place: PlaceItem) => void;
  onSelectBusiness: (biz: BusinessListing) => void;
  onOpenRegister: () => void;
}

const DISTRICT_OPTIONS: Array<'All' | KeralaDistrict> = [
  'All',
  'Kasaragod',
  'Kannur',
  'Wayanad',
  'Kozhikode',
  'Malappuram',
  'Palakkad',
  'Thrissur',
  'Ernakulam',
  'Idukki',
  'Kottayam',
  'Alappuzha',
  'Pathanamthitta',
  'Kollam',
  'Thiruvananthapuram'
];

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  selectedDistrict,
  onDistrictChange,
  places,
  businesses,
  onSelectPlace,
  onSelectBusiness,
  onOpenRegister
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute matching autocomplete items (both places and businesses)
  const matchingResults = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { places: [], businesses: [] };

    // Places matching
    const matchedPlaces = places
      .filter((p) => {
        if (selectedDistrict !== 'All' && p.district !== selectedDistrict) return false;
        return (
          p.name.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.notableFor.some((n) => n.toLowerCase().includes(q))
        );
      })
      .slice(0, 5);

    // Businesses matching
    const matchedBusinesses = businesses
      .filter((b) => {
        if (selectedDistrict !== 'All' && b.district !== selectedDistrict) return false;
        return (
          b.name.toLowerCase().includes(q) ||
          b.businessCategory.toLowerCase().includes(q) ||
          b.locality.toLowerCase().includes(q) ||
          b.district.toLowerCase().includes(q) ||
          b.services.some((s) => s.toLowerCase().includes(q))
        );
      })
      .slice(0, 5);

    return { places: matchedPlaces, businesses: matchedBusinesses };
  }, [places, businesses, query, selectedDistrict]);

  const totalSuggestions = matchingResults.places.length + matchingResults.businesses.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isFocused || totalSuggestions === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < totalSuggestions - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : totalSuggestions - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        if (selectedIndex < matchingResults.places.length) {
          const item = matchingResults.places[selectedIndex];
          onSelectPlace(item);
        } else {
          const bizIndex = selectedIndex - matchingResults.places.length;
          const biz = matchingResults.businesses[bizIndex];
          onSelectBusiness(biz);
        }
        setIsFocused(false);
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative" ref={containerRef}>
      {/* Search Input Bar (JustDial style) */}
      <div 
        className={`bg-white rounded-2xl p-1.5 sm:p-2 border-2 transition-all flex flex-col sm:flex-row items-stretch gap-1.5 shadow-md ${
          isFocused ? 'border-amber-600 ring-3 ring-amber-100' : 'border-neutral-200 hover:border-neutral-300'
        }`}
      >
        {/* District Selector */}
        <div className="relative flex items-center bg-neutral-50 sm:w-56 rounded-xl px-3 py-2 border border-neutral-200">
          <MapPin className="w-4 h-4 text-amber-600 shrink-0 mr-2" />
          <select
            value={selectedDistrict}
            onChange={(e) => onDistrictChange(e.target.value as 'All' | KeralaDistrict)}
            className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-hidden cursor-pointer appearance-none pr-5 truncate"
            aria-label="Filter by Kerala District"
          >
            <option value="All">All Kerala (14 Districts)</option>
            {DISTRICT_OPTIONS.filter((d) => d !== 'All').map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 pointer-events-none" />
        </div>

        {/* Main Search Query Input */}
        <div className="relative flex-1 flex items-center px-3 py-1.5 sm:py-0">
          <Search className="w-4 h-4 text-neutral-400 shrink-0 mr-2.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              onQueryChange(e.target.value);
              setIsFocused(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={
              selectedDistrict === 'All'
                ? "Search any place (e.g. Koodathai, Bekal, Munnar) or business, service..."
                : `Search in ${selectedDistrict} (e.g. Koodathai, clinics, spices, hotels...)`
            }
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden"
          />

          {query && (
            <button
              onClick={() => {
                onQueryChange('');
                setSelectedIndex(-1);
              }}
              className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer mr-2"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setIsFocused(false)}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 shadow-xs"
          >
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Autocomplete Dropdown */}
      {isFocused && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-50 animate-in fade-in-50 zoom-in-95 duration-100 max-h-96 overflow-y-auto">
          {totalSuggestions === 0 ? (
            <div className="p-5 text-center">
              <p className="text-sm font-semibold text-neutral-800">
                No existing listing found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-neutral-500 mt-1 mb-3">
                Own a business or want to register a place in {selectedDistrict === 'All' ? 'Kerala' : selectedDistrict}?
              </p>
              <button
                onClick={() => {
                  setIsFocused(false);
                  onOpenRegister();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Register &ldquo;{query}&rdquo; Now</span>
              </button>
            </div>
          ) : (
            <div className="py-2">
              {/* Places Section */}
              {matchingResults.places.length > 0 && (
                <div>
                  <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between">
                    <span>Localities &amp; Places</span>
                    <span className="text-neutral-500 font-normal">{matchingResults.places.length} found</span>
                  </div>
                  {matchingResults.places.map((place, idx) => (
                    <button
                      key={place.id}
                      onClick={() => {
                        onSelectPlace(place);
                        setIsFocused(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-amber-50/70 transition-colors flex items-center justify-between cursor-pointer border-b border-neutral-50 ${
                        selectedIndex === idx ? 'bg-amber-50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Navigation className="w-4 h-4 text-amber-600 shrink-0" />
                        <div className="truncate">
                          <span className="font-semibold text-sm text-neutral-900">
                            {place.name}
                          </span>
                          <span className="text-xs text-neutral-500 ml-1.5">
                            {place.district}
                          </span>
                          <div className="text-[11px] text-neutral-400 truncate">
                            {place.tagline}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                        {place.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Businesses Section */}
              {matchingResults.businesses.length > 0 && (
                <div>
                  <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between mt-1">
                    <span>Registered Businesses &amp; Services</span>
                    <span className="text-neutral-500 font-normal">{matchingResults.businesses.length} found</span>
                  </div>
                  {matchingResults.businesses.map((biz, bIdx) => {
                    const active = selectedIndex === matchingResults.places.length + bIdx;
                    return (
                      <button
                        key={biz.id}
                        onClick={() => {
                          onSelectBusiness(biz);
                          setIsFocused(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-amber-50/70 transition-colors flex items-center justify-between cursor-pointer border-b border-neutral-50 ${
                          active ? 'bg-amber-50' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Store className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div className="truncate">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-sm text-neutral-900">
                                {biz.name}
                              </span>
                              {biz.isVerified && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              )}
                            </div>
                            <div className="text-[11px] text-neutral-500 truncate">
                              {biz.locality}, {biz.district} &bull; {biz.phone}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                          {biz.businessCategory}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
