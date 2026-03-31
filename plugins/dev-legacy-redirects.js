/**
 * Docusaurus @docusaurus/plugin-client-redirects only writes redirect HTML in `yarn build`
 * (postBuild). Legacy URLs 404 under `yarn start`. This mirrors the same redirects in dev.
 * @see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
 */
const docSpaceRedirects = require("../scripts/doc-space-redirects.generated.json");

function normalizePath(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function pluginDevLegacyRedirects(context) {
  const { siteConfig } = context;
  const baseTrim = siteConfig.baseUrl.replace(/\/$/, "");

  /** @type {Array<[string, string]>} */
  const pairs = docSpaceRedirects.map(({ from, to }) => [
    `${baseTrim}${from}`,
    `${baseTrim}${to}`,
  ]);

  const map = new Map();
  for (const [from, to] of pairs) {
    map.set(from, to);
    map.set(normalizePath(from), to);
  }

  return {
    name: "dev-legacy-redirects",
    configureWebpack(_config, isServer) {
      if (isServer) {
        return {};
      }
      return {
        devServer: {
          onBeforeSetupMiddleware(devServer) {
            devServer.app.use((req, res, next) => {
              const raw = req.path || req.url.split("?")[0];
              const target = map.get(raw) || map.get(normalizePath(raw));
              if (target) {
                res.writeHead(302, { Location: target });
                res.end();
                return;
              }
              next();
            });
          },
        },
      };
    },
  };
}

module.exports = pluginDevLegacyRedirects;
