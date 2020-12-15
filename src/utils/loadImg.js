// 加载图片，返回promise，处理完成拿到图片
function onLoad(src) {
  const img = new Image();
  img.src = src;
  return new Promise((resolve, reject) => {
    // try{
    img.onload = () => resolve(img);
    img.onerror = () => resolve(false);
  });
}

export { onLoad };
