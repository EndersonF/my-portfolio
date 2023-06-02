export const GA_TRACKING_ID = 'G-MSGK89NWXE';

export function initializeGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', GA_TRACKING_ID);
}
