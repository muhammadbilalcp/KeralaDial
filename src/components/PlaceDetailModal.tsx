import React from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Compass, 
  Building2, 
  Navigation, 
  Edit3, 
  Calendar, 
  Star,
  ExternalLink
} from 'lucide-react';
import { PlaceItem } from '../types';

interface PlaceDetailModalProps {
  place: PlaceItem | null;
  onClose: () => void;
  onEnquire: (place: PlaceItem) => void;
  onToggleBookmark: (place: PlaceItem) => void;
  isBookmarked: boolean;
  onEnrich: (place: PlaceItem) => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  place,
  onClose,
  onEnquire,
  onToggleBookmark,
  isBookmarked,
  onEnrich
}) => {
  if (!place) return null;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.name}, ${place.district}, Kerala, India`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Top Gradient Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              {place.district} District
            </span>
            <span className="text-xs text-amber-200 font-medium">
              {place.zone}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mb-2">
            {place.name}
          </h2>

          <p className="text-amber-100 text-sm sm:text-base leading-relaxed max-w-xl">
            {place.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
            <div>
              <div className="text-[11px] uppercase font-bold text-neutral-400">Category</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 truncate">{place.category}</div>
            </div>
            <div className="border-x border-neutral-200">
              <div className="text-[11px] uppercase font-bold text-neutral-400">District HQ Hub</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 truncate">{place.nearbyHub || place.district}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase font-bold text-neutral-400">Status</div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-600 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-600" />
              About {place.name}
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {place.description}
            </p>
          </div>

          {/* Key Landmarks & Notables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-amber-600" />
              Key Features & Highlights
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              {place.notableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-lg text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* User Custom Notes / "Give details later" Section */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Edit3 className="w-4 h-4 text-amber-700" />
                Custom Notes & Local Insights
              </div>
              <button
                onClick={() => onEnrich(place)}
                className="text-xs font-semibold text-amber-700 hover:text-amber-900 hover:underline cursor-pointer"
              >
                {place.userNotes ? 'Edit Notes' : '+ Add Details Now'}
              </button>
            </div>
            {place.userNotes ? (
              <p className="text-xs sm:text-sm text-neutral-800 italic bg-white p-3 rounded-lg border border-amber-200/60">
                &ldquo;{place.userNotes}&rdquo;
              </p>
            ) : (
              <p className="text-xs text-neutral-600">
                Have specific phone numbers, contact persons, historical trivia, or business services for {place.name}? Click above to enrich this listing anytime!
              </p>
            )}
          </div>

          {/* Location & Navigation Link */}
          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-neutral-700 text-sm">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{place.name}, {place.district} District, Kerala, India</span>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1 hover:underline shrink-0"
            >
              <span>Explore on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(place)}
              className={`px-3 py-2 text-xs font-medium rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-700'
                  : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onEnrich(place)}
              className="px-3 py-2 text-xs font-medium rounded-xl bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Give More Details</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onEnquire(place)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Dial / Enquire</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
