(function(root) {
  const provider = {
    id: "nakios",
    name: "Nakios",
    description: "Mainly French, Some English & 4K Quality",
    version: "3.8.2",
    author: "wooodyhood",
    supportedTypes: ["movie", "tv"],
    enabled: true,
    formats: ["mp4", "m3u8"],
    logo: "https://i.postimg.cc/nLwY1pJB/nakios.png",
    contentLanguage: ["fr", "en"],
    async search(query) {
      return [];
    },
    async resolve(id) {
      return null;
    },
  };

  if (typeof module === 'object' && module.exports) module.exports = provider;
  if (typeof define === 'function' && define.amd) define(function() { return provider; });
  if (root) root.provider = provider;
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : this);
