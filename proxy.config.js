const proxy = [
    {
      context: '/api',
      target: 'https://app.vindi.com.br',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;