const path = require('path');

module.exports = {
  packagerConfig: {
    ignore: [
      'forge.config.js',
      'yarn.lock',
      '.eslintrc.js',
      '.gitignore',
    ],
  },
  makers: [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "admin_electron_beta"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    },
  ],
  plugins: [
    ['@electron-forge/plugin-webpack', {
      mainConfig: path.resolve(__dirname, './webpack.main.config.js'),
      renderer: {
        config: path.resolve(__dirname, './webpack.renderer.config.js'),
        entryPoints: [{
            js: path.resolve(__dirname, './src/renderer/index.js'),
            html: path.resolve(__dirname, './src/renderer/index.html'),
            name: 'main_window',
            preload: {
              js: path.resolve(__dirname, './src/renderer/preload.js'),
            },
          },
        ],
      },
    }],
  ],
};
