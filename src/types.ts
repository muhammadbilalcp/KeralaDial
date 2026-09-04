export type KeralaDistrict =
  | 'Kasaragod'
  | 'Kannur'
  | 'Wayanad'
  | 'Kozhikode'
  | 'Malappuram'
  | 'Palakkad'
  | 'Thrissur'
  | 'Ernakulam'
  | 'Idukki'
  | 'Kottayam'
  | 'Alappuzha'
  | 'Pathanamthitta'
  | 'Kollam'
  | 'Thiruvananthapuram';

export type PlaceCategory =
  | 'All'
  | 'Coastal & Beach'
  | 'Heritage & Culture'
  | 'Urban & Commercial'
  | 'Town & Suburb'
  | 'Village & Panchayat'
  | 'Nature & Hills'
  | 'Backwaters & Waterways'
  | 'Tech & Knowledge Hub';

export type BusinessCategory =
  | 'All'
  | 'Restaurants & Cafes'
  | 'Hotels, Resorts & Homestays'
  | 'Hospitals, Clinics & Ayurveda'
  | 'Taxis & Travel Services'
  | 'Shopping, Retail & Spices'
  | 'Auto Care & Repairs'
  | 'Real Estate & Builders'
  | 'Education & Coaching'
  | 'Home & Professional Services'
  | 'IT & Digital Services';

export interface UserReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface PlaceItem {
  id: string;
  name: string;
  district: KeralaDistrict;
  category: Exclude<PlaceCategory, 'All'>;
  zone: string;
  tagline: string;
  description: string;
  notableFor: string[];
  nearbyHub?: string;
  type: 'Town' | 'Village' | 'Major City' | 'Coastal Locality' | 'Heritage Spot' | 'Scenic Highland' | 'Commercial Hub';
  userNotes?: string;
  isBookmarked?: boolean;
  reviews?: UserReview[];
}

export interface BusinessListing {
  id: string;
  name: string;
  businessCategory: Exclude<BusinessCategory, 'All'>;
  district: KeralaDistrict;
  locality: string;
  address: string;
  pincode: string;
  contactPerson: string;
  phone: string;
  whatsapp: string;
  email?: string;
  website?: string;
  openingHours: string;
  services: string[];
  description: string;
  rating: number;
  reviews: UserReview[];
  photos?: string[];
  coverImage?: string;
  isVerified: boolean;
  registeredAt: string;
  ownerUid?: string;
  ownerEmail?: string;
}

export interface DistrictInfo {
  name: KeralaDistrict;
  title: string;
  tagline: string;
  count: number;
  color: string;
  badgeBg: string;
  iconName: string;
  description: string;
}

export interface SearchFilters {
  query: string;
  selectedDistrict: 'All' | KeralaDistrict;
  selectedPlaceCategory: PlaceCategory;
  selectedBusinessCategory: BusinessCategory;
  listingType: 'all' | 'places' | 'businesses';
  sortBy: 'relevance' | 'rating' | 'name-asc' | 'name-desc' | 'district';
  bookmarkedOnly: boolean;
}
