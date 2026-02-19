import { onCLS, onFID, onLCP, onFCP, onTTFB, onINP } from 'web-vitals';

const ANALYTICS_ENDPOINT = 'https://your-api.com/v1/metrics';

function sendToAnalytics(metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id, // Unique ID for the current page load
    url: window.location.href,
    navigationType: performance.getEntriesByType('navigation')[0]?.type,
  });

  // Use sendBeacon for reliability (sends even if user closes the tab)
  if (navigator.sendBeacon) {
    navigator.sendBeacon(ANALYTICS_ENDPOINT, body);
  } else {
    fetch(ANALYTICS_ENDPOINT, {
      body,
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export function initMonitoring() {
  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onLCP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  onINP(sendToAnalytics);
}