import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  FileText, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Globe, 
  User as UserIcon, 
  Tag, 
  Save,
  ShieldCheck,
  LogIn,
  Camera,
  Upload,
  Trash2,
  Share2,
  Copy,
  Check,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { User } from 'firebase/auth';
import { BusinessListing, KeralaDistrict, BusinessCategory } from '../types';
import { compressImageFile, CATEGORY_SAMPLE_PHOTOS } from '../utils/imageUtils';
import { getBusinessShareUrl, getBusinessWhatsAppShareUrl } from '../utils/shareUtils';

interface RegisterBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (business: BusinessListing) => void;
  initialDistrict?: 'All' | KeralaDistrict;
  currentUser: User | null;
  onOpenAuth?: () => void;
  onViewBusiness?: (business: BusinessListing) => void;
}

const ALL_14_DISTRICTS: KeralaDistrict[] = [
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

const BUSINESS_CATEGORIES: Array<Exclude<BusinessCategory, 'All'>> = [
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

export const RegisterBusinessModal: React.FC<RegisterBusinessModalProps> = ({
  isOpen,
  onClose,
  onRegister,
  initialDistrict = 'Kozhikode',
  currentUser,
  onOpenAuth,
  onViewBusiness
}) => {
  const [name, setName] = useState('');
  const [businessCategory, setBusinessCategory] = useState<Exclude<BusinessCategory, 'All'>>('Restaurants & Cafes');
  const [district, setDistrict] = useState<KeralaDistrict>(
    initialDistrict === 'All' ? 'Kozhikode' : initialDistrict
  );
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactPerson, setContactPerson] = useState(currentUser?.displayName || '');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [website, setWebsite] = useState('');
  const [openingHours, setOpeningHours] = useState('09:00 AM - 08:30 PM (All Days)');
  const [servicesInput, setServicesInput] = useState('');
  const [description, setDescription] = useState('');
  
  // Photos state
  const [photos, setPhotos] = useState<string[]>([]);
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Post-submit state
  const [createdBusiness, setCreatedBusiness] = useState<BusinessListing | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    if (currentUser) {
      if (!contactPerson && currentUser.displayName) {
        setContactPerson(currentUser.displayName);
      }
      if (!email && currentUser.email) {
        setEmail(currentUser.email);
      }
    }
  }, [currentUser]);

  if (!isOpen) return null;

  // Handle image upload from file picker or camera
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessingPhoto(true);
    const newPhotos: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const compressedDataUrl = await compressImageFile(file, 900, 900, 0.72);
        newPhotos.push(compressedDataUrl);
      } catch (err) {
        console.error('Failed to compress image', err);
      }
    }

    if (newPhotos.length > 0) {
      setPhotos((prev) => [...prev, ...newPhotos]);
    }
    setIsProcessingPhoto(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Add custom URL photo
  const handleAddCustomPhotoUrl = () => {
    if (!customPhotoUrl.trim()) return;
    setPhotos((prev) => [...prev, customPhotoUrl.trim()]);
    setCustomPhotoUrl('');
    setShowUrlInput(false);
  };

  // Add preset sample photo for this category
  const handleAddSampleCategoryPhoto = () => {
    const samples = CATEGORY_SAMPLE_PHOTOS[businessCategory] || CATEGORY_SAMPLE_PHOTOS['Restaurants & Cafes'];
    if (samples && samples.length > 0) {
      const unusedSample = samples.find((s) => !photos.includes(s)) || samples[0];
      setPhotos((prev) => [...prev, unusedSample]);
    }
  };

  // Remove a photo
  const handleRemovePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  // Set cover photo (move to position 0)
  const handleSetCoverPhoto = (index: number) => {
    if (index === 0) return;
    setPhotos((prev) => {
      const copy = [...prev];
      const [chosen] = copy.splice(index, 1);
      return [chosen, ...copy];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !locality.trim()) return;

    const services = servicesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const newListing: BusinessListing = {
      id: `biz-${Date.now()}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: name.trim(),
      businessCategory,
      district,
      locality: locality.trim(),
      address: address.trim() || `${locality.trim()}, ${district}, Kerala`,
      pincode: pincode.trim() || '673001',
      contactPerson: contactPerson.trim() || (currentUser?.displayName || 'Business Owner'),
      phone: phone.trim(),
      whatsapp: whatsapp.trim() || phone.trim(),
      email: email.trim() || (currentUser?.email || undefined),
      website: website.trim() || undefined,
      openingHours: openingHours.trim() || '09:00 AM - 08:00 PM',
      services: services.length > 0 ? services : ['Local Service', 'Customer Support'],
      description: description.trim() || `${name.trim()} provides verified services in ${locality.trim()}, ${district}, Kerala.`,
      rating: 5.0,
      reviews: [],
      photos: photos.length > 0 ? photos : undefined,
      coverImage: photos.length > 0 ? photos[0] : undefined,
      isVerified: true,
      registeredAt: new Date().toISOString().split('T')[0],
      ownerUid: currentUser?.uid,
      ownerEmail: currentUser?.email || undefined
    };

    onRegister(newListing);
    setCreatedBusiness(newListing);
  };

  const handleCopyShareLink = () => {
    if (!createdBusiness) return;
    const url = getBusinessShareUrl(createdBusiness.id);
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handleCloseAndReset = () => {
    setCreatedBusiness(null);
    setLinkCopied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Free Business &amp; Service Registration
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Register Your Business on KeralaDial
              </h3>
            </div>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {createdBusiness ? (
          /* Post-Submit Success View with Share Link & WhatsApp */
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                Live on KeralaDial
              </span>
              <h4 className="text-2xl font-bold text-neutral-900 font-display mt-2">
                {createdBusiness.name}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mt-1">
                Your business is now saved in the live directory! Customers can view your photos, call you, chat on WhatsApp, and leave reviews.
              </p>
            </div>

            {/* Shareable Link Box */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-left space-y-2.5 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-amber-600" />
                  Your Public Business Link
                </span>
                <span className="text-[11px] text-neutral-400">Share anywhere</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={getBusinessShareUrl(createdBusiness.id)}
                  className="w-full text-xs font-mono bg-white border border-neutral-300 rounded-lg px-3 py-2 text-neutral-700 select-all"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {linkCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-200" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={getBusinessWhatsAppShareUrl(createdBusiness)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex items-center justify-center gap-3">
              {onViewBusiness && (
                <button
                  type="button"
                  onClick={() => {
                    const biz = createdBusiness;
                    handleCloseAndReset();
                    onViewBusiness(biz);
                  }}
                  className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  View Business Profile
                </button>
              )}
              <button
                type="button"
                onClick={handleCloseAndReset}
                className="px-5 py-2.5 border border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
            {/* Account / Auth Ownership status */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  {currentUser ? (
                    <div>
                      <span className="font-semibold text-neutral-900">Signed In Account:</span>{' '}
                      <span className="text-emerald-700 font-medium">{currentUser.email || currentUser.displayName || 'Guest User'}</span>
                      <p className="text-[11px] text-neutral-500">This business listing will be linked to your Firebase user profile.</p>
                    </div>
                  ) : (
                    <div>
                      <span className="font-semibold text-neutral-900">Guest Registration:</span>{' '}
                      <span className="text-neutral-600">You can register immediately without signing up!</span>
                      <p className="text-[11px] text-neutral-500">Searching is always 100% open. Sign in only if you want to manage this listing later.</p>
                    </div>
                  )}
                </div>
              </div>

              {!currentUser && onOpenAuth && (
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold text-[11px] flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-600" />
                  <span>Sign In First (Optional)</span>
                </button>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="font-semibold">Live Directory Sync:</span> List your business with direct phone and WhatsApp contact. Stored securely and visible instantly to customers across Kerala.
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[10px] font-bold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Real-Time
              </span>
            </div>

            {/* Essential Business Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Business / Store / Service Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Koodathai Malabar Spices, Calicut Biryani Point..."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Category *
                </label>
                <select
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value as any)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600 bg-white"
                >
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Photos & Images Upload Section */}
            <div className="bg-neutral-50/80 border border-neutral-200 rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block font-bold text-neutral-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-amber-600" />
                    Business Photos &amp; Storefront ({photos.length})
                  </label>
                  <p className="text-[11px] text-neutral-500">
                    Add photos of your storefront, products, menu, or interior to attract more customers.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddSampleCategoryPhoto}
                  className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 bg-amber-100/70 hover:bg-amber-100 px-2 py-1 rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                  title="Add high-quality category preset photo"
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Use Sample Photo</span>
                </button>
              </div>

              {/* Upload Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="business-photos-input"
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isProcessingPhoto}
                  className="px-3 py-2 bg-white border border-neutral-300 hover:border-amber-500 hover:bg-amber-50/50 rounded-lg font-semibold text-xs text-neutral-800 flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs disabled:opacity-50"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isProcessingPhoto ? 'Compressing...' : 'Upload Photos (PC/Camera)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  className="px-2.5 py-2 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg font-semibold text-xs text-neutral-600 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Add by URL</span>
                </button>
              </div>

              {/* URL Input Box */}
              {showUrlInput && (
                <div className="flex items-center gap-2 pt-1 animate-in fade-in duration-100">
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    placeholder="Paste image URL (https://...)"
                    className="flex-1 px-3 py-1.5 border border-neutral-300 rounded-lg text-xs text-neutral-900 bg-white focus:outline-hidden focus:border-amber-600"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomPhotoUrl}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-lg cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              )}

              {/* Photo Previews Gallery */}
              {photos.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2">
                  {photos.map((photo, index) => (
                    <div 
                      key={index}
                      className="relative rounded-lg overflow-hidden border border-neutral-300 bg-neutral-200 aspect-video group"
                    >
                      <img
                        src={photo}
                        alt={`Business photo ${index + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      
                      {index === 0 && (
                        <span className="absolute top-1 left-1 bg-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                          Cover
                        </span>
                      )}

                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-1">
                        {index !== 0 && (
                          <button
                            type="button"
                            onClick={() => handleSetCoverPhoto(index)}
                            className="p-1 bg-white/90 hover:bg-white text-neutral-800 rounded text-[10px] font-bold shadow-xs cursor-pointer"
                            title="Make Cover Photo"
                          >
                            Set Cover
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(index)}
                          className="p-1 bg-rose-600 hover:bg-rose-700 text-white rounded shadow-xs cursor-pointer"
                          title="Remove Photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* District & Locality (e.g. Koodathai) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  District *
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value as KeralaDistrict)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600 bg-white"
                >
                  {ALL_14_DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d} District
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Locality / Town / Village *
                </label>
                <input
                  type="text"
                  required
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. Koodathai, Thamarassery, Mavoor..."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>
            </div>

            {/* Address & Pincode */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Full Street Address / Landmark
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Near Bus Stand, Main Road, Koodathai"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="e.g. 673573"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>
            </div>

            {/* Contact Person & Direct Phone / WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. Basheer / Manager"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Phone / Calling Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 94471 28934"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. +91 94471 28934"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>
            </div>

            {/* Email, Website, Working Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@business.com"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Website / Social Page (Optional)
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://mybusiness.com"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                  Operating Hours
                </label>
                <input
                  type="text"
                  value={openingHours}
                  onChange={(e) => setOpeningHours(e.target.value)}
                  placeholder="e.g. 09:00 AM - 08:30 PM"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
                />
              </div>
            </div>

            {/* Services / Tags */}
            <div>
              <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                Services &amp; Specialities (Comma-separated)
              </label>
              <input
                type="text"
                value={servicesInput}
                onChange={(e) => setServicesInput(e.target.value)}
                placeholder="e.g. Cardamom, Home Delivery, Emergency Consultation, AC Rooms, Taxi booking"
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-bold text-neutral-700 uppercase tracking-wider text-[11px] mb-1">
                About Your Business / Details
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell customers about your products, heritage, service guarantees, or unique offerings..."
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Publish Listing to Directory</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
