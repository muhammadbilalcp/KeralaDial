import React from 'react';
import { 
  X, 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Download,
  Share2
} from 'lucide-react';
import { PlaceItem } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedPlaces: PlaceItem[];
  onRemoveBookmark: (place: PlaceItem) => void;
  onSelectPlace: (place: PlaceItem) => void;
  onExport: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedPlaces,
  onRemoveBookmark,
  onSelectPlace,
  onExport
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-900 text-white">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-current" />
            <h3 className="font-bold text-base font-display">
              Saved Places ({bookmarkedPlaces.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedPlaces.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-neutral-400 px-4">
              <Bookmark className="w-10 h-10 text-neutral-300 mb-2 stroke-1" />
              <p className="font-semibold text-neutral-700 text-sm">No saved places yet</p>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Click the bookmark icon on any Kerala place or town card to save it for quick reference!
              </p>
            </div>
          ) : (
            bookmarkedPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-white border border-neutral-200 rounded-xl p-3.5 hover:border-amber-400 hover:shadow-xs transition-all flex items-start justify-between gap-3"
              >
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onSelectPlace(place);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-neutral-900 hover:text-amber-700">
                      {place.name}
                    </span>
                    <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded font-bold">
                      {place.district}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 line-clamp-1">
                    {place.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-neutral-600">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span>{place.zone}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveBookmark(place)}
                  className="p-1.5 text-neutral-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {bookmarkedPlaces.length > 0 && (
          <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3">
            <button
              onClick={onExport}
              className="flex-1 py-2 px-3 bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-neutral-600" />
              <span>Export Saved List</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
