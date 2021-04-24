import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'http://localhost:8888',
      'changeOrigin': true
    }
  }

});
