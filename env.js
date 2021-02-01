let url = '';
let origin = '';
process.env.NODE_ENV === 'production' ? (url = '') : (url = '/apc');
process.env.NODE_ENV === 'production'
  ? (url = window.location.origin)
  : (url = 'https://stage.linkhealth-cloud.cn');
console.log(url);
export { url, origin };
