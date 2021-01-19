let url = '';

process.env.NODE_ENV === 'production' ? (url = '') : (url = '/apc');
console.log(url);
export { url };
