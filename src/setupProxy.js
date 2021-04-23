const { createProxyMiddleware } = require('http-proxy-middleware'); 

module.exports = function (app) { 
  app.use(createProxyMiddleware('/api', { 
    pathRewrite: {
      '^/api': '',
    },
    target: 'http://0.0.0.0:8888',                                                                                                      
    changeOrigin: true,                                                                                                                 
  }));
}