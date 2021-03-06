/*
 * @Author: your name
 * @Date: 2022-01-19 19:11:42
 * @LastEditTime: 2022-02-25 10:37:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \MiMi\vue.config.js
 */
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // publicPath: '/app',
    // outputDir: 'dist',
    // indexPath: 'cppp1111.html',
    // lintOnSave:false,
    // 保护main.js
    productionSourceMap: true,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}