import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ExternalLink,
  Store,
  ChevronRight
} from 'lucide-react';
import { BusinessListing } from '../types';

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
  const cleanPhone = business.phone.replace(/[^0-9+]/g, '');
  const cleanWhatsApp = (business.whatsapp || business.phone).replace(/[^0-9]/g, '');

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top bar: Category & Verification */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full">
            {business.businessCategory}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified</span>
          </div>
        </div>

        {/* Business Name */}
        <h3 
          onClick={() => onViewDetails(business)}
          className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors cursor-pointer line-clamp-1"
        >
          {business.name}
        </h3>

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
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
