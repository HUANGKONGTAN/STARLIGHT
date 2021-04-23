const { createProxyMiddleware } = require('http-proxy-middleware'); 

module.exports = function (request:any) { 
  request.use(createProxyMiddleware('/api', { 
    pathRewrite: {
      '^/api': '',
    },
    target: 'http://0.0.0.0:8888',                                                                                                      
    changeOrigin: true,                                                                                                                 
  }));
}