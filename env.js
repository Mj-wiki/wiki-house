let url = '';
let origin = '';
process.env.NODE_ENV === 'production' ? (url = '') : (url = '/apc');
export { url };
