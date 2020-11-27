const merge = require('deepmerge');

module.exports = {
    publicPath: '/',

    // tweak internal webpack configuration.
    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => merge(options, {
                loaders: {
                    i18n: '@kazupon/vue-i18n-loader',
                },
            }));
    },

    css: {
        // 配置高于chainWebpack中关于css loader的配置
        loaderOptions: {
            // css预设器配置项
            less: {
                javascriptEnabled: true,
            },
        },
    },

    transpileDependencies: [/\biview\/src\/locale\/lang\b/],

    devServer: {
        open: true,
        compress: true,
        // 解决 Webpack "Invalid Host Header"
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://dev.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api',
                },
            },
        },
    },
};
