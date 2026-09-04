import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  CheckCircle2, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send,
  HelpCircle
} from 'lucide-react';
import { PlaceItem } from '../types';

interface EnquiryModalProps {
  place: PlaceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  place,
  isOpen,
  onClose
}) => {
  const [inquiryType, setInquiryType] = useState('Tourism & Sights');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const targetName = place ? place.name : 'Kerala Local Directory';
  const targetDistrict = place ? place.district : 'Kerala';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-emerald-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                KeralaDial Fast Assist
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Dial & Enquire: {targetName}
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

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Quick Direct Helplines */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Verified Kerala Information Hotlines
            </div>
            <div className="flex items-center justify-between text-neutral-700 pt-1">
              <span>Kerala Tourism Toll-Free:</span>
              <a href="tel:18004254747" className="font-mono font-bold text-emerald-700 hover:underline">
                1800-425-4747
              </a>
            </div>
            <div className="flex items-center justify-between text-neutral-700">
              <span>{targetDistrict} District Information:</span>
              <a href="tel:1077" className="font-mono font-bold text-emerald-700 hover:underline">
                1077 (Toll Free)
              </a>
            </div>
            <div className="flex items-center justify-between text-neutral-700">
              <span>Kerala Police / Assistance:</span>
              <a href="tel:112" className="font-mono font-bold text-emerald-700 hover:underline">
                112 / 100
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-neutral-900 text-base">Enquiry Sent!</h4>
              <p className="text-xs text-neutral-600">
                Your inquiry for {targetName} ({targetDistrict}) has been logged in your local session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  What information do you need about {targetName}?
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-emerald-600 bg-white"
                >
                  <option>Tourism, Sightseeing & Timings</option>
                  <option>Hotels, Homestays & Resorts</option>
                  <option>Taxi, Bus & Transportation routes</option>
                  <option>Local Government & Panchayat Office</option>
                  <option>Commercial Trade & Business Directories</option>
                  <option>General Inquiries</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Rahul"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Notes / Specific Questions
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Need best time to visit, taxi contact, local food spots..."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900 focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Information</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
