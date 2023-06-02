export const GA_TRACKING_ID = 'G-MSGK89NWXE';

export function initializeGoogleAnalytics() {
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  gtag('js', new Date());

  gtag('config', GA_TRACKING_ID);
}
