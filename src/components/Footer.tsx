import React from 'react';
import { Phone, Compass, MapPin, Heart, Shield } from 'lucide-react';
import { KeralaDistrict } from '../types';
import logoImg from '../assets/images/kerala_search_logo_1788532422656.jpg';

interface FooterProps {
  onSelectDistrict: (dist: KeralaDistrict) => void;
  onOpenEnquiry: () => void;
}

const DISTRICTS: KeralaDistrict[] = [
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

export const Footer: React.FC<FooterProps> = ({ onSelectDistrict, onOpenEnquiry }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800 mt-16" id="kerala-footer">
      {/* Top Banner */}
      <div className="border-b border-neutral-800 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shrink-0 border border-neutral-700">
              <img 
                src={logoImg} 
                alt="KeralaDial" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display">
                Kerala<span className="text-amber-500">Dial</span>
              </div>
              <p className="text-neutral-400 text-xs">
                Local Search Engine &amp; Business Directory for All 14 Districts of Kerala
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="bg-neutral-800/80 px-4 py-2.5 rounded-xl border border-neutral-700 flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] text-neutral-400 uppercase font-bold">Kerala Dial Helpline</div>
                <div className="text-white font-bold font-mono text-sm">1800-425-4747</div>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Directory Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-500" />
            Districts Directory (14)
          </h4>
          <ul className="grid grid-cols-2 gap-1.5">
            {DISTRICTS.map((d) => (
              <li key={d}>
                <button
                  onClick={() => onSelectDistrict(d)}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left truncate text-[11px]"
                >
                  {d}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">
            Business Directory Services
          </h4>
          <ul className="space-y-1.5 text-neutral-400">
            <li>Restaurants, Biryani &amp; Cafes</li>
            <li>Hotels, Resorts &amp; Homestays</li>
            <li>Hospitals, Clinics &amp; Ayurveda</li>
            <li>Taxis, Cabs &amp; Travel Operators</li>
            <li>Spices, Wholesale &amp; Retail Stores</li>
            <li>Auto Care, Garages &amp; Repairs</li>
            <li>Real Estate &amp; Building Contractors</li>
            <li>IT, Digital &amp; Web Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">
            Search Engine Features
          </h4>
          <ul className="space-y-1.5 text-neutral-400">
            <li>Instant Locality &amp; Business Search</li>
            <li>Direct 1-Click Phone Calling</li>
            <li>Direct WhatsApp Chat Integration</li>
            <li>Customer Feedback &amp; Review System</li>
            <li>Free Business &amp; Place Registration</li>
            <li>Full Directory Export (JSON / CSV)</li>
            <li>Personalized Saved Listings Drawer</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">
            About KeralaDial
          </h4>
          <p className="text-neutral-400 leading-relaxed mb-3">
            KeralaDial is an open local directory and search engine connecting residents, businesses, and travelers across every town, panchayat, and city in Kerala.
          </p>
          <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>Fast, Verified &amp; Community Powered</span>
          </div>
        </div>
      </div>


      {/* Bottom Legal bar */}
      <div className="border-t border-neutral-800 py-4 px-4 text-center text-neutral-500 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {new Date().getFullYear()} KeralaDial. Built for Kerala Explorers and Local Search.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Powered by God&apos;s Own Country Local Database</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
