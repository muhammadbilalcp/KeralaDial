import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  FileJson
} from 'lucide-react';
import { PlaceItem } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  places: PlaceItem[];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  places
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(places, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kerala_places_export_${places.length}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleDownloadCSV = () => {
    const headers = ['ID', 'Name', 'District', 'Category', 'Zone', 'Tagline', 'Highlights', 'UserNotes'];
    const rows = places.map((p) => [
      `"${p.id}"`,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.district}"`,
      `"${p.category}"`,
      `"${p.zone}"`,
      `"${(p.tagline || '').replace(/"/g, '""')}"`,
      `"${(p.notableFor || []).join('; ').replace(/"/g, '""')}"`,
      `"${(p.userNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kerala_places_${places.length}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleCopy = () => {
    const textList = places.map((p) => `${p.name}, ${p.district} (${p.category})`).join('\n');
    navigator.clipboard.writeText(textList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-900 text-white">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base font-display">Export Directory Data</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-xs text-neutral-600">
            Export the currently displayed <strong className="text-neutral-900">{places.length} Kerala places</strong> including your custom notes, contacts, and categorizations.
          </p>

          <div className="space-y-2.5">
            <button
              onClick={handleDownloadJSON}
              className="w-full p-3 rounded-xl border border-neutral-200 hover:border-amber-400 hover:bg-amber-50/50 flex items-center justify-between transition-colors text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <FileJson className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-neutral-900">Download JSON</div>
                  <div className="text-[11px] text-neutral-500">Structured array format with full place profiles</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-neutral-400 group-hover:text-amber-700" />
            </button>

            <button
              onClick={handleDownloadCSV}
              className="w-full p-3 rounded-xl border border-neutral-200 hover:border-emerald-400 hover:bg-emerald-50/50 flex items-center justify-between transition-colors text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-neutral-900">Download CSV Spreadsheet</div>
                  <div className="text-[11px] text-neutral-500">Compatible with Excel, Google Sheets, or databases</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-neutral-400 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={handleCopy}
              className="w-full p-3 rounded-xl border border-neutral-200 hover:border-sky-400 hover:bg-sky-50/50 flex items-center justify-between transition-colors text-left cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  {copied ? <Check className="w-5 h-5 text-sky-700" /> : <Copy className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-neutral-900">
                    {copied ? 'Copied to Clipboard!' : 'Copy Plain Text List'}
                  </div>
                  <div className="text-[11px] text-neutral-500">Fast copy of Place, District names</div>
                </div>
              </div>
              <Copy className="w-4 h-4 text-neutral-400 group-hover:text-sky-700" />
            </button>
          </div>
        </div>

        <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
