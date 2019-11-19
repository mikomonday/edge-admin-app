const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader'
          })
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          AntdScssThemePlugin.themify('less-loader')
        ]
      }
    ];

    config.plugins = [
      ...config.plugins,
      new AntdScssThemePlugin(path.join(__dirname, 'src', 'theme.scss'))
    ];
    return config;
  }
};
