(function(root) {
  const provider = {
    id: "movix",
    name: "Movix VF",
    description: "Movies and TV series in English & French (dubbed/subtitled)",
    version: "1.0.0",
    author: "wooodyhood",
    supportedTypes: ["movie", "tv"],
    enabled: true,
    formats: ["mp4", "m3u8"],
    logo: "https://i.postimg.cc/XYrPQm87/movix.png",
    contentLanguage: ["en", "fr"],
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
