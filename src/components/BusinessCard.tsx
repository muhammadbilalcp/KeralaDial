import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ExternalLink,
  Store,
  ChevronRight,
  Share2,
  Check,
  Camera
} from 'lucide-react';
import { BusinessListing } from '../types';
import { shareBusinessItem } from '../utils/shareUtils';
import { CATEGORY_SAMPLE_PHOTOS } from '../utils/imageUtils';

interface BusinessCardProps {
  business: BusinessListing;
  onViewDetails: (business: BusinessListing) => void;
  onLeaveFeedback: (business: BusinessListing) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onViewDetails,
  onLeaveFeedback
}) => {
  const [copied, setCopied] = useState(false);
  const cleanPhone = business.phone.replace(/[^0-9+]/g, '');
  const cleanWhatsApp = (business.whatsapp || business.phone).replace(/[^0-9]/g, '');

  const displayImage = business.photos && business.photos.length > 0 
    ? business.photos[0] 
    : business.coverImage || CATEGORY_SAMPLE_PHOTOS[business.businessCategory]?.[0];

  const photoCount = business.photos?.length || (business.coverImage ? 1 : 0);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await shareBusinessItem(business);
    if (!success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group">
      {/* Photo Header (if image exists) */}
      {displayImage && (
        <div 
          onClick={() => onViewDetails(business)}
          className="relative h-36 w-full bg-neutral-100 overflow-hidden cursor-pointer"
        >
          <img
            src={displayImage}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="text-[10px] font-bold bg-amber-500 text-neutral-950 px-2 py-0.5 rounded-md shadow-2xs">
              {business.businessCategory}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
              title="Share listing"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {photoCount > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 backdrop-blur-xs">
              <Camera className="w-3 h-3" />
              <span>{photoCount} photos</span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* If no photo was displayed, show category and share on top */}
          {!displayImage && (
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full">
                {business.businessCategory}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleShare}
                  className="p-1 text-neutral-400 hover:text-amber-700 transition-colors cursor-pointer"
                  title="Share listing"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          )}

          {/* Business Name */}
          <div className="flex items-start justify-between gap-2">
            <h3 
              onClick={() => onViewDetails(business)}
              className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors cursor-pointer line-clamp-1"
            >
              {business.name}
            </h3>
            {displayImage && business.isVerified && (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" title="Verified Listing" />
            )}
          </div>

          {/* Locality & District */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium text-neutral-800">{business.locality}</span>
            <span className="text-neutral-400">&bull;</span>
            <span>{business.district} District</span>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center bg-emerald-600 text-white px-2 py-0.5 rounded text-xs font-bold gap-1">
              <span>{business.rating.toFixed(1)}</span>
              <Star className="w-3 h-3 fill-current" />
            </div>
            <button
              onClick={() => onLeaveFeedback(business)}
              className="text-xs text-neutral-500 hover:text-amber-700 hover:underline cursor-pointer"
            >
              {business.reviews.length} {business.reviews.length === 1 ? 'review' : 'reviews'} &bull; Feedback
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
            {business.description}
          </p>

          {/* Services / Offerings tags */}
          {business.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {business.services.slice(0, 3).map((svc, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md"
                >
                  {svc}
                </span>
              ))}
              {business.services.length > 3 && (
                <span className="text-[10px] text-neutral-400 self-center">
                  +{business.services.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Footer with Dial and WhatsApp buttons */}
        <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${cleanPhone}`}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
              title={`Call ${business.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/${cleanWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => onViewDetails(business)}
            className="text-xs font-semibold text-neutral-700 hover:text-amber-700 flex items-center gap-0.5 cursor-pointer"
          >
            <span>Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
