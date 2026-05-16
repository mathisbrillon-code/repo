const provider = {
  id: "nakios",
  name: "Nakios",
  description: "Mainly French, Some English & 4K Quality",
  version: "3.8.2",
  author: "Wooodyhood",
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
module.exports = provider;
module.exports.default = provider;
