(function(root) {
  const provider = {
    id: "purstream",
    name: "Purstream",
    description: "Films and series in French (VF) / subtitled French (VOSTFR) / multi-language (MULTI) from purstream.art.",
    version: "3.0.0",
    author: "wooodyhood",
    supportedTypes: ["movie", "tv"],
    enabled: true,
    formats: ["mp4", "m3u8"],
    logo: "https://i.postimg.cc/7L5shxmC/purstream.png",
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
