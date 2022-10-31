const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');
const fs = require('fs');

const getExports = () => fs.readdirSync("./components")
    .reduce((output, dir) => {
        const componentPath = `./${dir}`
        return {
            ...output,
            [componentPath]: `./components/${dir}/index.jsx`
        }
    }, {})


module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'library',
          remotes: {},
          filename: 'static/chunks/remoteEntry.js',
          exposes: getExports(),
          shared: {
            react: {
              requiredVersion: false,
              singleton: true
            }
          },
          extraOptions: {
            skipSharingNextInternals: true
          }
        }),
      );
    }
    return config;
  },
  // your original next.config.js export
  reactStrictMode: true
};
