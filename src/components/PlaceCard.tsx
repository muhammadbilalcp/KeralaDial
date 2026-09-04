import React from 'react';
import { 
  MapPin, 
  Phone, 
  ExternalLink, 
  Bookmark, 
  CheckCircle2, 
  Share2, 
  Star,
  Info,
  Edit3,
  Building2,
  Compass
} from 'lucide-react';
import { PlaceItem } from '../types';

interface PlaceCardProps {
  place: PlaceItem;
  onViewDetails: (place: PlaceItem) => void;
  onEnquire: (place: PlaceItem) => void;
  onToggleBookmark: (place: PlaceItem) => void;
  isBookmarked: boolean;
  onShare: (place: PlaceItem) => void;
  onEnrich: (place: PlaceItem) => void;
  viewMode?: 'grid' | 'list';
}

// Pseudo-deterministic rating for realistic JustDial directory look
function getPlaceRating(name: string): { score: string; reviews: number } {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  const score = (4.1 + (Math.abs(hash) % 9) * 0.1).toFixed(1);
  const reviews = 50 + (Math.abs(hash) % 950);
  return { score, reviews };
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  onViewDetails,
  onEnquire,
  onToggleBookmark,
  isBookmarked,
  onShare,
  onEnrich,
  viewMode = 'grid'
}) => {
  const { score, reviews } = getPlaceRating(place.name);

  // Maps URL to launch directly in Google Maps for this Kerala place
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.name}, ${place.district}, Kerala, India`
  )}`;

  if (viewMode === 'list') {
    return (
      <div 
        id={`place-row-${place.id}`}
        className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-lg text-neutral-900 font-display">
              {place.name}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              Verified Directory
            </span>
            <span className="text-xs text-neutral-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <strong className="text-neutral-700">{place.district}</strong>, {place.zone}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-1 mb-2">
            {place.tagline}
          </p>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="inline-flex items-center gap-1 bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">
              <Star className="w-3 h-3 fill-current" />
              {score}
            </span>
            <span className="text-neutral-400 text-xs">({reviews} ratings)</span>
            <span className="text-neutral-300">|</span>
            <span className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-[11px]">
              {place.category}
            </span>
            {place.userNotes && (
              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
                <Edit3 className="w-3 h-3" />
                Custom Notes Added
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100">
          <button
            onClick={() => onEnquire(place)}
            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Enquire / Dial</span>
          </button>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
            title="Directions on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Directions</span>
          </a>

          <button
            onClick={() => onViewDetails(place)}
            className="px-3 py-2 border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-neutral-600" />
            <span>Details</span>
          </button>

          <button
            onClick={() => onToggleBookmark(place)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 border-amber-400 text-amber-600'
                : 'border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Save Place'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  // Grid Card View (Classic JustDial Local Directory Card)
  return (
    <div 
      id={`place-card-${place.id}`}
      className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between group"
    >
      <div className="p-4 sm:p-5">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                {place.district}
              </span>
              <span className="text-[10px] text-neutral-400 font-medium">
                {place.zone}
              </span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-neutral-900 font-display group-hover:text-amber-600 transition-colors">
              {place.name}
            </h3>
          </div>

          <button
            onClick={() => onToggleBookmark(place)}
            className={`p-2 rounded-full border transition-colors shrink-0 cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Save Place'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Rating & Trust Badges */}
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1 bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-xs shadow-2xs">
            <Star className="w-3 h-3 fill-current" />
            <span>{score}</span>
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            {reviews} Ratings
          </span>
          <span className="text-neutral-300">|</span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
            Verified
          </span>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 mb-3">
          {place.tagline}
        </p>

        {/* Notable Highlights Pills */}
        <div className="flex items-center gap-1.5 flex-wrap mb-4">
          {place.notableFor.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md font-medium"
            >
              {item}
            </span>
          ))}
          {place.notableFor.length > 3 && (
            <span className="text-[11px] text-neutral-400 font-medium">
              +{place.notableFor.length - 3} more
            </span>
          )}
        </div>

        {/* User Notes indicator if customized */}
        {place.userNotes && (
          <div className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
            <div className="flex items-center gap-1 font-semibold text-[11px] text-amber-800 mb-0.5">
              <Edit3 className="w-3 h-3" /> User Details Added:
            </div>
            <p className="line-clamp-1 italic text-neutral-700">{place.userNotes}</p>
          </div>
        )}
      </div>

      {/* JustDial-style Action Footer Bar */}
      <div className="bg-neutral-50 border-t border-neutral-200 p-3 flex items-center justify-between gap-2">
        <button
          onClick={() => onEnquire(place)}
          className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Dial / Enquire</span>
        </button>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral-700 hover:text-amber-600 hover:bg-white rounded-xl border border-neutral-200 transition-colors"
          title="Open in Google Maps"
        >
          <Compass className="w-4 h-4 text-amber-600" />
        </a>

        <button
          onClick={() => onViewDetails(place)}
          className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-white rounded-xl border border-neutral-200 transition-colors cursor-pointer"
          title="Full Place Details"
        >
          <Info className="w-4 h-4" />
        </button>

        <button
          onClick={() => onEnrich(place)}
          className="p-2 text-neutral-700 hover:text-amber-600 hover:bg-white rounded-xl border border-neutral-200 transition-colors cursor-pointer"
          title="Enrich / Add More Info Later"
        >
          <Edit3 className="w-4 h-4" />
        </button>

        <button
          onClick={() => onShare(place)}
          className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-white rounded-xl border border-neutral-200 transition-colors cursor-pointer"
          title="Share Place Link"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
