import React, { useState } from 'react';
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
  User, 
  Tag, 
  Save
} from 'lucide-react';
import { BusinessListing, KeralaDistrict, BusinessCategory } from '../types';

interface RegisterBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (business: BusinessListing) => void;
  initialDistrict?: 'All' | KeralaDistrict;
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
  initialDistrict = 'Kozhikode'
}) => {
  const [name, setName] = useState('');
  const [businessCategory, setBusinessCategory] = useState<Exclude<BusinessCategory, 'All'>>('Restaurants & Cafes');
  const [district, setDistrict] = useState<KeralaDistrict>(
    initialDistrict === 'All' ? 'Kozhikode' : initialDistrict
  );
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [openingHours, setOpeningHours] = useState('09:00 AM - 08:30 PM (All Days)');
  const [servicesInput, setServicesInput] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
      contactPerson: contactPerson.trim() || 'Business Owner',
      phone: phone.trim(),
      whatsapp: whatsapp.trim() || phone.trim(),
      email: email.trim() || undefined,
      website: website.trim() || undefined,
      openingHours: openingHours.trim() || '09:00 AM - 08:00 PM',
      services: services.length > 0 ? services : ['Local Service', 'Customer Support'],
      description: description.trim() || `${name.trim()} provides verified services in ${locality.trim()}, ${district}, Kerala.`,
      rating: 5.0,
      reviews: [],
      isVerified: true,
      registeredAt: new Date().toISOString().split('T')[0]
    };

    onRegister(newListing);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
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
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900 font-display">
              Business Registered Successfully!
            </h4>
            <p className="text-xs text-neutral-600 max-w-md mx-auto">
              Your business is now live on KeralaDial. Customers across Kerala can discover your services, call you directly, chat on WhatsApp, and leave reviews.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="font-semibold">Live Database Sync:</span> List your business with direct phone and WhatsApp contact. Stored securely in real-time Firebase Database (ziloclips).
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-200 text-amber-950 font-mono text-[10px] font-bold shrink-0">
                Firebase Firestore
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
