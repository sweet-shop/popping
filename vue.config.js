const path = require('path');
const util = require('./config/util');
const resolve = dir => {
    return path.join(__dirname, dir);
};
let port = 8888;
util.getPort(port, portNum => {
    port = portNum;
});
let config = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias
            .set('@libs', resolve('src/libs')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@component', resolve('src/components'))
            .set('@view', resolve('src/view'))
            .set('@config', resolve('config'))
            .set('@image', resolve('src/assets/image'));
        const oneOfsMap = config.module.rule('less').oneOfs.store;
        oneOfsMap.forEach(item => {
            item.use('style-resources-loader')
                .loader('style-resources-loader')
                .options({
                    // 需要插入的文件路径
                    // patterns: './src/assets/css/theme.less'
                    // 需要插入的文件路径数组
                    // patterns: ["./path/to/vars.less", "./path/to/mixins.less"]
                })
                .end();
        });
    },
    configureWebpack: config => {
        const StyleLintPlugin = require('stylelint-webpack-plugin');
        config.plugins.push(
            new StyleLintPlugin({
                files: ['src/**/*.{vue,html,css,scss,sass,less}'],
                failOnError: false,
                cache: true,
                fix: false,
            })
        );
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
};
const openBrowser = process.env.VUE_APP_OPENBROWSER === 'true';
if (openBrowser) {
    config = Object.assign(config, {
        devServer: {
            // eslint
            overlay: {
                warnings: true,
                errors: true
            },
            // 启动时打开浏览器
            open: openBrowser,
            // 打开浏览器时的路径
            openPage: '',
            // 服务端口
            port: port,
            // 设置代理
            proxy: null,
            // 关闭host检查
            disableHostCheck: true
        }
    })
}
module.exports = config;