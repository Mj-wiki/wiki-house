import { onLoad } from './loadImg.js';

// 画圆头像
async function drawImageCircle(
  { img, width, height, isUrl, defaultImg },
  r = 50,
) {
  let canvas = document.createElement('canvas');
  canvas.width = 2 * r;
  canvas.height = 2 * r;
  let ctx = canvas.getContext('2d');
  let imgCache = img;
  if (isUrl) {
    imgCache = await onLoad(img);
  }
  if (!imgCache && defaultImg) {
    imgCache = await onLoad(defaultImg);
  }
  if (!imgCache) {
    return false;
  }
  ctx.arc(r, r, r, 0, Math.PI * 2, true);
  ctx.clip();
  // 计算画图位置使其居中
  let x = 0;
  let y = 0;
  let widthCache = 2 * r;
  let heightCache = 2 * r;
  if (width) {
    x = (widthCache - width) / 2;
    widthCache = width;
  }
  if (height) {
    y = (heightCache - height) / 2;
    heightCache = height;
  }
  let imgWidth = imgCache.width;
  let imgHeight = imgCache.height;
  let realSide = Math.min(imgWidth, imgHeight);
  let imgX = Math.max(0, (imgWidth - realSide) / 2);
  let imgY = Math.max(0, (imgHeight - realSide) / 2);
  ctx.drawImage(
    imgCache,
    imgX,
    imgY,
    realSide,
    realSide,
    x,
    y,
    widthCache,
    heightCache,
  );
  return canvas;
}

// 生成颜色
function formatColor(ctx, colorTarget, radius) {
  let color = colorTarget.color || '#000';
  if (colorTarget.useGradients) {
    const { colorStops, type } = colorTarget.color;
    color = null;
    if (type === 'linear') {
      const { x, y, x2, y2 } = colorTarget.color;
      color = ctx.createLinearGradient(
        radius * x,
        radius * y,
        radius * x2,
        radius * y2,
      );
    }
    if (type === 'radial') {
      const { x, y, r } = colorTarget.color;
      color = ctx.createRadialGradient(
        0,
        0,
        radius,
        x * radius,
        y * radius,
        radius * r,
      );
    }
    colorStops.forEach(item => {
      color.addColorStop(item.offset, item.color);
    });
  }
  return color;
}

export default async function creatIcon({
  img = { show: false },
  radius = 50,
  border = { show: false },
  mask = { show: false },
  icon = { show: false },
  text = { show: false },
} = {}) {
  let canvas = document.createElement('canvas');
  let borderWidth = 0;
  // 加边框
  if (border.show) {
    borderWidth = border.width;
  }
  let realRadius = radius + borderWidth;
  canvas.width = 2 * realRadius;
  canvas.height = 2 * realRadius;
  let ctx = canvas.getContext('2d');
  // 加边框
  if (border.show) {
    let broderColor = formatColor(ctx, border, realRadius);
    ctx.fillStyle = broderColor;
  }
  ctx.arc(realRadius, realRadius, realRadius, 0, Math.PI * 2, true);
  ctx.fill();
  if (img.show) {
    let imgCanvas = await drawImageCircle(img, radius);
    if (imgCanvas) {
      ctx.drawImage(
        imgCanvas,
        borderWidth,
        borderWidth,
        2 * radius,
        2 * radius,
      );
    }
  }
  // 加蒙层
  if (mask.show) {
    ctx.globalAlpha = mask.opacity;
    let maskColor = formatColor(ctx, mask, realRadius);
    ctx.fillStyle = maskColor;
    ctx.arc(realRadius, realRadius, realRadius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  // 加icon
  if (icon.show) {
    let iconCanvas = await drawImageCircle(icon, radius);
    if (iconCanvas) {
      ctx.drawImage(
        iconCanvas,
        borderWidth,
        borderWidth,
        2 * radius,
        2 * radius,
      );
    }
  }
  // 加文字
  if (text.show) {
    ctx.fillStyle = '#FFF';
    let textCount = text.textCount || 4;
    let fontSize = text.fontSize || (2 * realRadius) / (textCount + 1);
    ctx.font = fontSize + 'px serif';
    ctx.textBaseline = 'middle';
    let textY = realRadius;
    let line = 1;
    let textWidthTotal = ctx.measureText(text.content);
    if (textWidthTotal.width > fontSize * textCount) {
      line = 2;
      textY -= fontSize / 2;
    }
    // let content = subStringByMix(text.content, textCount);
    for (let i = 0; i < line; i++) {
      let content = text.content.substring(i * textCount, (i + 1) * textCount);
      // let content = subStringByMix(text.content, 8);
      let textWidth = ctx.measureText(content);
      let textX = (2 * realRadius - textWidth.width) / 2;
      textY += i * fontSize;
      ctx.fillText(content, textX, textY);
    }
  }
  return canvas;
}
