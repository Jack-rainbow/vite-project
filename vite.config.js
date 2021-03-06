const path = require('path');

//vit配置参考：https://github.com/vitejs/vite/blob/master/src/node/config.ts


export default {
    root: './',
    //  别名配置（https://github.com/vitejs/vite/issues/88）
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        '/@/page': path.resolve(__dirname, './src/page'),
        '/@components/': path.resolve(__dirname, './src/components'),
        '/@S/': path.resolve(__dirname, './src/style'),
        '/@utils/': path.resolve(__dirname, './src/utils'),
    },

    css: {
        // todo 引用全局css 未生效（https://github.com/vitejs/vite/issues/650）
        // https://github.com/vitejs/vite/issues/520
      loaderOptions: {
      }
    },

    // 解决模块引用的坑而开发(https://blog.csdn.net/frontend_frank/article/details/106632197)
    optimizeDeps: {
      include: ["lodash", "axios", 'ant-design-vue', '@ant-design-vue/use']
    },

    //jsx config
    jsx: {
      factory: 'h',
      fragment: 'Fragment'
    },

    proxy: {
      // proxy: {
      //   ‘/api‘: {
      //     target: ‘http://jsonplaceholder.typicode.com‘,
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, ‘‘),
      //   },
      // },
    },
}