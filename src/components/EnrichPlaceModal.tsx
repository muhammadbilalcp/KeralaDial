import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  Plus, 
  MapPin, 
  Phone, 
  Edit3, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PlaceItem, KeralaDistrict, PlaceCategory } from '../types';

interface EnrichPlaceModalProps {
  place: PlaceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedPlace: PlaceItem) => void;
}

const DISTRICT_LIST: KeralaDistrict[] = [
  'Kasaragod',
  'Kannur',
  'Kozhikode',
  'Thrissur',
  'Ernakulam',
  'Alappuzha',
  'Kollam',
  'Thiruvananthapuram'
];

const CATEGORY_LIST: Array<Exclude<PlaceCategory, 'All'>> = [
  'Coastal & Beach',
  'Heritage & Culture',
  'Urban & Commercial',
  'Town & Suburb',
  'Village & Panchayat',
  'Nature & Hills',
  'Backwaters & Waterways',
  'Tech & Knowledge Hub'
];

export const EnrichPlaceModal: React.FC<EnrichPlaceModalProps> = ({
  place,
  isOpen,
  onClose,
  onSave
}) => {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState<KeralaDistrict>('Kasaragod');
  const [category, setCategory] = useState<Exclude<PlaceCategory, 'All'>>('Town & Suburb');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [notableInput, setNotableInput] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (place) {
      setName(place.name);
      setDistrict(place.district);
      setCategory(place.category);
      setTagline(place.tagline);
      setDescription(place.description);
      setNotableInput(place.notableFor.join(', '));
      setUserNotes(place.userNotes || '');
    } else {
      setName('');
      setDistrict('Kasaragod');
      setCategory('Town & Suburb');
      setTagline('');
      setDescription('');
      setNotableInput('');
      setUserNotes('');
    }
    setSavedSuccess(false);
  }, [place, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const notables = notableInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const updated: PlaceItem = {
      id: place ? place.id : `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${district.toLowerCase()}`,
      name: name.trim(),
      district,
      category,
      zone: place ? place.zone : `${district} Region`,
      tagline: tagline.trim() || `Key locality in ${district}, Kerala`,
      description: description.trim() || `${name} is an important locality in the ${district} district of Kerala.`,
      notableFor: notables.length > 0 ? notables : [`${district} locality`, 'Local hub'],
      type: place ? place.type : 'Town',
      nearbyHub: place?.nearbyHub || `${district} Center`,
      userNotes: userNotes.trim() || undefined,
      isBookmarked: place?.isBookmarked || false
    };

    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5">
              Kerala Places Directory
            </div>
            <h2 className="text-xl font-bold font-display text-white">
              {place ? `Give / Enrich Details for ${place.name}` : 'Add New Kerala Place / Details'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success alert */}
        {savedSuccess && (
          <div className="bg-emerald-50 border-b border-emerald-200 p-3 text-emerald-800 text-xs font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Place details saved successfully! Updating search engine...
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm">
          <p className="text-xs text-neutral-500">
            You can enrich any place with custom phone contacts, notable landmarks, business services, or local trivia. Everything is saved locally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Place / Locality Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Bekal, Fort Kochi..."
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                District *
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value as KeralaDistrict)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600 bg-white"
              >
                {DISTRICT_LIST.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Exclude<PlaceCategory, 'All'>)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600 bg-white"
            >
              {CATEGORY_LIST.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Tagline / Short Summary
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. Historic coastal fort overlooking the Arabian Sea..."
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Detailed Description / About
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the place, geographical context, commercial or cultural importance..."
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Notable Attractions / Key Highlights (comma-separated)
            </label>
            <input
              type="text"
              value={notableInput}
              onChange={(e) => setNotableInput(e.target.value)}
              placeholder="e.g. Beach Park, Fort Wall, Sunset Point, Seafood Hub"
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              Custom Notes / Phone Numbers / Everything Else Later
            </label>
            <textarea
              rows={2}
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder="Add your local phone numbers, hotel contacts, secret spots, travel tips, or directory records here..."
              className="w-full px-3 py-2 border border-amber-300 bg-amber-50/40 rounded-lg text-neutral-900 focus:outline-hidden focus:border-amber-600"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Details</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
