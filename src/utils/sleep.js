export default async function Sleep(ms) {
  return new Promise(reslove => {
    setTimeout(() => {
      reslove();
    }, ms);
  });
}
