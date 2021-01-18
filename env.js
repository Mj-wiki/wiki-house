let url = '';

process.env.NODE_ENV === 'production'
  ? (url = 'http://120.221.160.5:9002')
  : (url = '/apc');
console.log(url);
export { url };
