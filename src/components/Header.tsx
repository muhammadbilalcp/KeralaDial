import React, { useState, useRef, useEffect } from 'react';
import { 
  PhoneCall, 
  Bookmark, 
  PlusCircle, 
  Compass, 
  MapPin, 
  Download,
  User as UserIcon,
  LogIn,
  LogOut,
  ChevronDown,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { User } from 'firebase/auth';
import logoImg from '../assets/images/kerala_search_logo_1788532422656.jpg';

interface HeaderProps {
  onAddPlaceClick: () => void;
  onRegisterBusinessClick: () => void;
  onBookmarksClick: () => void;
  bookmarkCount: number;
  onExportClick: () => void;
  onEnquiryClick: () => void;
  currentUser: User | null;
  onAuthClick: () => void;
  onSignOut: () => void;
  onMyListingsClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onAddPlaceClick,
  onRegisterBusinessClick,
  onBookmarksClick,
  bookmarkCount,
  onExportClick,
  onEnquiryClick,
  currentUser,
  onAuthClick,
  onSignOut,
  onMyListingsClick,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-xs" id="main-header">
      {/* Top micro-bar */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Compass className="w-3.5 h-3.5" />
              Kerala Local Directory & Search Engine
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Public Search: No Signup Needed
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">Covering 800+ Places &amp; Businesses across All 14 Districts</span>
          </div>
          <div className="flex items-center space-x-5 text-neutral-300">
            <button 
              onClick={onEnquiryClick}
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              Kerala Dial Help: 1800-425-4747
            </button>
            <span className="text-neutral-600">|</span>
            <button 
              onClick={onExportClick}
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
              title="Export dataset"
            >
              <Download className="w-3 h-3" />
              Export Directory (JSON/CSV)
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-xs border border-neutral-200 shrink-0 bg-white group-hover:shadow-md transition-shadow">
              <img 
                src={logoImg} 
                alt="KeralaDial Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 font-display">
                  Kerala<span className="text-amber-600">Dial</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                  Search Engine
                </span>
              </div>
              <p className="text-xs text-neutral-500 hidden sm:block">
                All Places, Localities &amp; Business Directory of Kerala
              </p>
            </div>
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Register Business Button */}
          <button
            onClick={onRegisterBusinessClick}
            id="header-register-biz-btn"
            className="px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="hidden xs:inline">Register</span>
            <span>Business</span>
          </button>

          {/* Bookmarks */}
          <button
            onClick={onBookmarksClick}
            id="header-bookmarks-btn"
            className="relative px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Bookmark className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">Saved</span>
            {bookmarkCount > 0 && (
              <span className="bg-amber-600 text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Add / Enrich Place Button */}
          <button
            onClick={onAddPlaceClick}
            id="header-add-place-btn"
            className="px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden md:inline">Add Place</span>
          </button>

          {/* Firebase Authentication User Section */}
          <div className="relative" ref={menuRef}>
            {currentUser ? (
              <div>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
                  id="user-profile-menu-btn"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-[11px] font-bold uppercase shrink-0">
                    {currentUser.displayName ? currentUser.displayName[0] : (currentUser.email ? currentUser.email[0] : 'U')}
                  </div>
                  <span className="hidden md:inline max-w-[100px] truncate">
                    {currentUser.displayName || currentUser.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-200 py-2 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-2 border-b border-neutral-100">
                      <p className="font-bold text-neutral-900 truncate">
                        {currentUser.displayName || 'Logged in user'}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {currentUser.email || (currentUser.isAnonymous ? 'Guest / Anonymous Session' : '')}
                      </p>
                    </div>

                    {onMyListingsClick && (
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onMyListingsClick();
                        }}
                        className="w-full text-left px-3.5 py-2 hover:bg-neutral-50 text-neutral-700 flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <Building2 className="w-4 h-4 text-emerald-600" />
                        <span>My Registered Businesses</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSignOut();
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-rose-50 text-rose-700 flex items-center gap-2 cursor-pointer font-medium"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                id="header-login-btn"
                className="px-3 py-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Sign in to manage listings (Search is always free)"
              >
                <LogIn className="w-3.5 h-3.5 text-neutral-600" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


