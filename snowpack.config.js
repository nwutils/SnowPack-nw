/** - Note this config for snowpack are handle by hand, and waiting for auto generate doc type [15 janvier 2021]
 * Use ['Alt'+'/'] for uncomment props you need
 */
module.exports = {
  /** - Mount local directories to custom URLs in your built application.
   * @type {string}
   * @see https://www.snowpack.dev/reference/configuration#root */
  // root: "/",

  /** - Mount local directories to custom URLs in your built application.
   * @type {{[path: string]: string | {url: string, resolve: boolean, static: boolean}}}
   * @see https://www.snowpack.dev/reference/configuration#mount */
  mount: {
    src: "/_dist_",
    public: "/",
  },

  /** - Inherit from a separate “base” config. Your configuration will be merged on top of the extended base config.
   * @type {string}
   * @see https://www.snowpack.dev/reference/configuration#extends */
  // extends: "",

  /** - Enable Snowpack plugins and their options.
   * @type {string[] | Array<(string | {})[]>  }
   * @see https://www.snowpack.dev/guides/plugins */
  // plugins: [],

  /** - Configure how npm packages are installed and used
   * @type { Object.<string, string[]> }
   * @see https://www.snowpack.dev/reference/configuration#packageoptions */
  // packageOptions: {
  //   namedExports: [],
  // },

  /** - Configure import aliases for directories and packages.
   * @type { Object.<string, string> }
   * @see https://www.snowpack.dev/reference/configuration#alias */
  // alias: {},

  /** - Exclude any files from the Snowpack pipeline.
   * @type { Array<string> }
   * @see https://www.snowpack.dev/reference/configuration#exclude */
  // exclude: ["**/node_modules/**/*"],

  /** - Configure the Snowpack dev server.
   * @type { Object.<string, any> }
   * @see https://www.snowpack.dev/reference/configuration#devoptions */
  // devOptions: {
  //   secure: false,
  //   hostname: "",
  //   port: 8080,
  //   fallback: "index.html",
  //   open: "**Default**",
  //   output: "dashboard",
  //   hmr: true,
  //   hmrDelay: 0,
  //   hmrPort: 8080,
  //   hmrErrorOverlay: true,
  //   out: "build",
  // },

  /** - Configure the Snowpack dev server.
   * @type { Object.<string, any> }
   * @see https://www.snowpack.dev/reference/configuration#buildoptions */
  buildOptions: {
    out: "dist",
  },
};
