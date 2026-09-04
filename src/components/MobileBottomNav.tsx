import React from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Plus, 
  Bookmark, 
  User as UserIcon,
  LogIn
} from 'lucide-react';
import { User } from 'firebase/auth';

interface MobileBottomNavProps {
  searchTab: 'all' | 'places' | 'businesses';
  onSelectTab: (tab: 'all' | 'places' | 'businesses') => void;
  onOpenRegister: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
  currentUser: User | null;
  onOpenAuth: () => void;
  onScrollToSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  searchTab,
  onSelectTab,
  onOpenRegister,
  onOpenBookmarks,
  bookmarkCount,
  currentUser,
  onOpenAuth,
  onScrollToSearch
}) => {
  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/90 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] pb-safe"
      id="mobile-bottom-navigation"
    >
      <div className="grid grid-cols-5 h-14 items-center px-1 max-w-md mx-auto">
        {/* 1. Search / All Tab */}
        <button
          onClick={() => {
            onSelectTab('all');
            onScrollToSearch();
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            searchTab === 'all' ? 'text-amber-700 font-bold' : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Search className={`w-5 h-5 ${searchTab === 'all' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Search</span>
        </button>

        {/* 2. Places / Localities Tab */}
        <button
          onClick={() => {
            onSelectTab('places');
            onScrollToSearch();
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            searchTab === 'places' ? 'text-amber-700 font-bold' : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <MapPin className={`w-5 h-5 ${searchTab === 'places' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Places</span>
        </button>

        {/* 3. Central Register Business Button */}
        <button
          onClick={onOpenRegister}
          className="flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer group"
          title="Register a Local Business"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md -mt-3.5 border-2 border-white group-active:scale-95 transition-transform">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-[10px] text-emerald-800 font-bold mt-0.5">List Biz</span>
        </button>

        {/* 4. Verified Businesses Tab */}
        <button
          onClick={() => {
            onSelectTab('businesses');
            onScrollToSearch();
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            searchTab === 'businesses' ? 'text-amber-700 font-bold' : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Building2 className={`w-5 h-5 ${searchTab === 'businesses' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Directory</span>
        </button>

        {/* 5. Saved Places / Bookmarks */}
        <button
          onClick={onOpenBookmarks}
          className="relative flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer text-neutral-500 hover:text-neutral-800 transition-colors"
          title="View Saved Places"
        >
          <div className="relative">
            <Bookmark className="w-5 h-5 stroke-[1.8]" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-amber-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center ring-1 ring-white">
                {bookmarkCount > 9 ? '9+' : bookmarkCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Saved</span>
        </button>
      </div>
    </nav>
  );
};
