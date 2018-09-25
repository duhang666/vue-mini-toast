const path = require('path');

let config = {};
if (process.env.NODE_ENV === 'production') {
    config = {
        configureWebpack: {
            entry: './src/lib/index.js',
            output: {
                filename: 'vue-mini-toast.js',  // 打包生成文件的名字
                library: 'vue-mini-toast',      // reqire引入的名字
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
        },
        css: {extract: false}
    };
}

module.exports = config;