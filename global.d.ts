declare global {
  interface Window {
    // fetch: (url: string, options?: {}) => Promise<any>;
    workbox: any;
  }
}
