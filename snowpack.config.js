/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/_dist_",
    public: "/",
  },

  buildOptions: {
    out: "dist",
  },
};
