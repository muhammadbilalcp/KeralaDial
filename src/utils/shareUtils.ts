import { BusinessListing, PlaceItem } from '../types';

/**
 * Generate a direct link for a business
 */
export function getBusinessShareUrl(businessId: string): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('biz', businessId);
  return url.toString();
}

/**
 * Generate a direct link for a place / locality
 */
export function getPlaceShareUrl(placeId: string): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('place', placeId);
  return url.toString();
}

/**
 * WhatsApp share URL for a business
 */
export function getBusinessWhatsAppShareUrl(business: BusinessListing): string {
  const link = getBusinessShareUrl(business.id);
  const text = `Check out *${business.name}* (${business.businessCategory}) in ${business.locality}, ${business.district} on KeralaDial.\n📞 Phone: ${business.phone}\n🔗 View listing & reviews: ${link}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}

/**
 * Trigger native share or copy to clipboard
 */
export async function shareBusinessItem(business: BusinessListing): Promise<{ shared: boolean; copied: boolean }> {
  const shareUrl = getBusinessShareUrl(business.id);
  const shareData = {
    title: `${business.name} - KeralaDial`,
    text: `Find ${business.name} in ${business.locality}, ${business.district} on KeralaDial. Contact: ${business.phone}`,
    url: shareUrl
  };

  if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return { shared: true, copied: false };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return { shared: false, copied: false };
      }
      // Fallback to clipboard
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(shareUrl);
    return { shared: false, copied: true };
  } catch {
    return { shared: false, copied: false };
  }
}
