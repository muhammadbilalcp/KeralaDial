import React from 'react';
import { KeralaDistrict } from '../types';
import { DISTRICT_INFO } from '../data/places';
import { MapPin } from 'lucide-react';

interface DistrictBarProps {
  selectedDistrict: 'All' | KeralaDistrict;
  onSelectDistrict: (district: 'All' | KeralaDistrict) => void;
  districtCounts: Record<KeralaDistrict, number>;
  totalCount: number;
}

const DISTRICT_LIST: KeralaDistrict[] = [
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

export const DistrictBar: React.FC<DistrictBarProps> = ({
  selectedDistrict,
  onSelectDistrict,
  districtCounts,
  totalCount
}) => {
  return (
    <div className="w-full bg-neutral-50/80 border-y border-neutral-200 py-3 px-4" id="district-filter-bar">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 shrink-0 text-xs font-bold uppercase tracking-wider text-neutral-500">
          <MapPin className="w-3.5 h-3.5 text-amber-600" />
          <span>Districts:</span>
        </div>

        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => onSelectDistrict('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedDistrict === 'All'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <span>All Kerala</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              selectedDistrict === 'All' ? 'bg-amber-700 text-white' : 'bg-neutral-100 text-neutral-600'
            }`}>
              {totalCount}
            </span>
          </button>

          {DISTRICT_LIST.map((dist) => {
            const isSelected = selectedDistrict === dist;
            const count = districtCounts[dist] || DISTRICT_INFO[dist]?.count || 0;
            return (
              <button
                key={dist}
                onClick={() => onSelectDistrict(dist)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs font-semibold'
                    : 'bg-white text-neutral-700 hover:bg-amber-50/70 border border-neutral-200 hover:border-amber-200'
                }`}
              >
                <span>{dist}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isSelected ? 'bg-amber-700 text-white' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
