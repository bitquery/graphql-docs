// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** Space-in-folder → hyphen renames; built by scripts/regenerate-space-redirects.js */
const docSpaceRedirects = require("./scripts/doc-space-redirects.generated.json");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blockchain Data API (V1 Docs)",
  tagline: "Real time and historical data from 40+ blockchains",
  favicon: "img/favicon.ico",
  // ...
  trailingSlash: false,
  // ...
  // Set the production url of your site here
  url: "https://docs.bitquery.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/v1",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bitquery", // Usually your GitHub org/user name.
  projectName: "graphql-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    // Dev-only: client-redirects run at postBuild only; this mirrors legacy URLs during `yarn start`
    require("./plugins/dev-legacy-redirects.js"),
    // [
    //   "@graphql-markdown/docusaurus",
    //   {
    //     schema: "https://graphql.bitquery.io",
    //     rootPath: "./docs/graphql-reference/", // docs will be generated under './docs/v1/graphql-reference'
    //     baseURL: ".",
    //     linkRoot: "/docs/graphql-reference/",
    //     loaders: {
    //       UrlLoader: {
    //         module: "@graphql-tools/url-loader",
    //         options: {
    //           headers: {
    //             'X-API-KEY': process.env.API_KEY
    //           }
    //         }
    //       }
    //     },
    //   },
    // ],

    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: false,
        language: "en",
        style: undefined,
        maxSearchResults: 8,

        // lunr.js-specific settings
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2,
        },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          ...docSpaceRedirects,
          {
            to: "/docs/building-queries/Coinpath-Explained/Overview",
            from: "/docs/building-queries/Coinpath%20Explained/Overview",
          },
          {
            to: "/docs/examples/Bitcoin",
            from: "/docs/category/Bitcoin",
          },
          // Legacy Bitcoin example URLs (wrong folder casing or slug) → canonical paths from sitemap
          {
            to: "/docs/Examples/bitcoin/Bitcoin-Blocks-API",
            from: "/docs/examples/bitcoin/bitcoin-blocks-api",
          },
          {
            to: "/docs/Examples/bitcoin/bitcoin-address-api",
            from: "/docs/examples/bitcoin/bitcoin-address-api",
          },
          {
            to: "/docs/Examples/bitcoin/Bitcoin-Coinpath-API",
            from: "/docs/examples/bitcoin/bitcoin-coinpath-api",
          },
          {
            to: "/docs/Examples/bitcoin/bitcoin-fee-api",
            from: "/docs/examples/bitcoin/bitcoin-fee-api",
          },
          {
            to: "/docs/Examples/bitcoin/Bitcoin-Input-and-Output API",
            from: "/docs/examples/bitcoin/bitcoin-input-and-output-api",
          },
          {
            to: "/docs/Examples/bitcoin/Bitcoin-Transaction-API",
            from: "/docs/examples/bitcoin/bitcoin-transaction-api",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bitquery/graphql-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/bitquery/graphql-docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          // Hints only—engines may ignore; weekly is realistic for mostly static docs
          changefreq: "weekly",
          priority: 0.7,
          ignorePatterns: ["/docs/graphql-reference/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-ZWB80TDH9J",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-5GC69JH6",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/heroImage4.png",
      navbar: {
        logo: {
          alt: "Bitquery.io",
          src: "img/logoBitqueryDark.png",
          srcDark: "img/logoBitqueryWhite.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "V1 Docs",
            className: "v1-highlight",
          },
          {
            to: "https://docs.bitquery.io/",
            label: "V2 Docs",
            position: "left",
          },
          {
            to: "https://community.bitquery.io",
            label: "Forum",
            position: "left",
          },
          {
            to: "https://bitquery.io/forms/api",
            label: "Book Demo",
            position: "left",
          },
          {
            to: "https://account.bitquery.io/user/api_v2/access_tokens",
            label: "Get your free Access Token",
            position: "right",
          },
          {
            to: "https://lite.bitquery.io/",
            label: "Moneyflow Lite",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Website",
                to: "https://bitquery.io",
              },
              {
                label: "Tutorial",
                to: "docs/intro",
              },
              {
                label: "Blog",
                to: "https://bitquery.io/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/Bloxy_info",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Bitquery_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Forum",
                href: "https://community.bitquery.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/bitquery",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitquery, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
