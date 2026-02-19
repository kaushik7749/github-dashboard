import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

initializeFaro({
  // This URL includes your unique ingestion key
  url: 'https://faro-collector-prod-ap-south-1.grafana.net/collect/8bd394809908cddb8277d988ff649a52',
  app: {
    name: 'github-dashboard',
    version: '1.0.0',
    environment: 'production'
  },
  
  instrumentations: [
    // Captures errors, console logs, and Web Vitals
    ...getWebInstrumentations(),

    // Tracing captures how long your GitHub API calls take
    new TracingInstrumentation(),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);