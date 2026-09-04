import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Globe, 
  Mail, 
  User, 
  Star, 
  Share2, 
  Navigation, 
  Send,
  Building2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { BusinessListing, UserReview } from '../types';

interface BusinessDetailModalProps {
  business: BusinessListing | null;
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (businessId: string, review: UserReview) => void;
}

export const BusinessDetailModal: React.FC<BusinessDetailModalProps> = ({
  business,
  isOpen,
  onClose,
  onAddReview
}) => {
  const [feedbackAuthor, setFeedbackAuthor] = useState('');
  const [feedbackRating, setFeedbackRating] = useState<number>(5);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!isOpen || !business) return null;

  // Clean phone numbers for tel and whatsapp
  const cleanPhone = business.phone.replace(/[^0-9+]/g, '');
  const cleanWhatsApp = (business.whatsapp || business.phone).replace(/[^0-9]/g, '');

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name}, ${business.locality}, ${business.district}, Kerala, India`
  )}`;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackAuthor.trim() || !feedbackComment.trim()) return;

    const newRev: UserReview = {
      id: `rev-${Date.now()}`,
      author: feedbackAuthor.trim(),
      rating: feedbackRating,
      comment: feedbackComment.trim(),
      createdAt: 'Just now'
    };

    onAddReview(business.id, newRev);
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setShowReviewForm(false);
      setFeedbackAuthor('');
      setFeedbackComment('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-amber-950 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-neutral-900 px-2.5 py-0.5 rounded-full">
              {business.businessCategory}
            </span>
            <span className="text-xs text-amber-300 font-medium">
              {business.district} &bull; {business.locality}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {business.name}
            </h2>
            {business.isVerified && (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" title="Verified Listing" />
            )}
          </div>

          {/* Quick Rating bar */}
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center bg-emerald-600 text-white px-2 py-0.5 rounded-md text-xs font-bold gap-1">
              <span>{business.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs text-neutral-300">
              ({business.reviews.length} {business.reviews.length === 1 ? 'Customer Review' : 'Customer Reviews'})
            </span>
          </div>
        </div>

        {/* Action Bar (Call, WhatsApp, Maps) */}
        <div className="p-4 bg-amber-50/50 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`tel:${cleanPhone}`}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {business.phone}</span>
            </a>

            <a
              href={`https://wa.me/${cleanWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-700 hover:text-amber-700 flex items-center gap-1.5 hover:underline cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 text-amber-600" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Key Essential Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Address &amp; Location
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {business.address}
              </p>
              <div className="text-neutral-500 font-medium">
                Pincode: <span className="font-mono text-neutral-800">{business.pincode}</span>
              </div>
            </div>

            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Timings &amp; Contact Person
              </div>
              <div className="text-neutral-700">
                <span className="font-medium text-neutral-500">Working Hours:</span>{' '}
                <span className="font-semibold text-neutral-900">{business.openingHours}</span>
              </div>
              <div className="text-neutral-700 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-medium text-neutral-500">Contact:</span>{' '}
                <span className="font-semibold text-neutral-900">{business.contactPerson}</span>
              </div>
              {business.website && (
                <div className="text-neutral-700 flex items-center gap-1 truncate">
                  <Globe className="w-3.5 h-3.5 text-neutral-400" />
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline truncate"
                  >
                    {business.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              About {business.name}
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {business.description}
            </p>
          </div>

          {/* Services Offered */}
          {business.services.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Services &amp; Specialities
              </h3>
              <div className="flex flex-wrap gap-2">
                {business.services.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 rounded-lg text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Customer Reviews & Feedback Section */}
          <div className="pt-4 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  Customer Feedback &amp; Reviews ({business.reviews.length})
                </h3>
                <p className="text-xs text-neutral-500">
                  Real experiences from customers across Kerala
                </p>
              </div>

              {!showReviewForm && (
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  + Write Feedback
                </button>
              )}
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 mb-4 animate-in fade-in duration-150">
                {feedbackSubmitted ? (
                  <div className="text-center py-3 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Thank you! Your feedback has been published.
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-3 text-xs">
                    <div className="font-bold text-neutral-900 text-xs uppercase tracking-wider">
                      Rate and review {business.name}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-neutral-600 font-medium">Your Rating:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setFeedbackRating(star)}
                            className="p-1 text-amber-500 cursor-pointer hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= feedbackRating ? 'fill-current text-amber-500' : 'text-neutral-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="font-bold text-amber-800 ml-1">
                        {feedbackRating} / 5 Stars
                      </span>
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        value={feedbackAuthor}
                        onChange={(e) => setFeedbackAuthor(e.target.value)}
                        placeholder="Your Name (e.g. Rahul, Meera)"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 bg-white focus:outline-hidden focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        required
                        value={feedbackComment}
                        onChange={(e) => setFeedbackComment(e.target.value)}
                        placeholder="Write your feedback regarding customer service, pricing, punctuality, or product quality..."
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 bg-white focus:outline-hidden focus:border-amber-600"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowReviewForm(false)}
                        className="px-3 py-1.5 text-neutral-600 hover:bg-neutral-100 rounded-lg cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Feedback</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Existing Reviews List */}
            <div className="space-y-3">
              {business.reviews.length === 0 ? (
                <p className="text-xs text-neutral-400 italic">
                  No reviews yet. Be the first to leave feedback!
                </p>
              ) : (
                business.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-neutral-900">{rev.author}</span>
                        <div className="flex items-center text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < rev.rating ? 'fill-current' : 'text-neutral-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[11px] text-neutral-400">{rev.createdAt}</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{rev.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between">
          <div className="text-[11px] text-neutral-500">
            Registered on KeralaDial &bull; {business.locality}, {business.district}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
