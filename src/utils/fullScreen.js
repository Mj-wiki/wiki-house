// 监听全屏事件
// document.addEventListener("fullscreenchange", fullscreenchange);
// document.addEventListener("mozfullscreenchange", fullscreenchange);
// document.addEventListener("webkitfullscreenchange", fullscreenchange);
// document.addEventListener("msfullscreenchange", fullscreenchange);

// 切换全屏方法
export function fullScreen(isOpen, target) {
  let dom = target || document;
  let open_list = [
    'requestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullScreen',
    'msRequestFullscreen',
  ];
  let cancel_list = [
    'exitFullscreen',
    'mozCancelFullScreen',
    'webkitCancelFullScreen',
  ];
  let fn = null;
  if (isOpen) {
    fn = open_list.find(n => Boolean(dom[n]) === true);
    fn && dom[fn]();
    return;
  }
  fn = cancel_list.find(n => Boolean(document[n]) === true);
  fn && document[fn]();
}

// 判断是否是全屏
export function isFullScreen() {
  return (
    document.isFullScreen ||
    document.mozIsFullScreen ||
    document.webkitIsFullScreen
  );
}
