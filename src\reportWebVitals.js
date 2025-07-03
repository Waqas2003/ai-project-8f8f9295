import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, value, label }) {
  // Use `navigator.sendBeacon()` to send the metrics to your analytics endpoint.
  // See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
  navigator.sendBeacon('/analytics', JSON.stringify({ name, value, label }));
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);