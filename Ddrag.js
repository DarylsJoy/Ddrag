/**
 * 简单的拖动
 * @param {Object} gragTarget 拖拽元素
 * @param {Object} moveTarget 移动元素
 * @param {Function} callback 回调函数，形参为元素当前的坐标(x, y)
 */
function Ddrag(gragTarget, moveTarget, callback) {
  // 相关参数
  this.params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
  };
  this.gragTarget = gragTarget;
  this.moveTarget = moveTarget;
  this.callback = callback;
}

// 获取元素位置
Ddrag.prototype.getPosition = (obj, key) => {
  return obj.currentStyle ? obj.currentStyle[key] : window.getComputedStyle(obj)[key];
};

// 开始监听事件
Ddrag.prototype.init = function(gragTarget = this.gragTarget, moveTarget = this.moveTarget, callback = this.callback) {
  if (this.getPosition(moveTarget, 'left') !== 'auto') {
    this.params.left = this.getPosition(moveTarget, 'left');
  }
  if (this.getPosition(moveTarget, 'top') !== 'auto') {
    this.params.top = this.getPosition(moveTarget, 'top');
  }
  gragTarget.addEventListener('mousedown', (event) => {
    this.params.flag = true;
    let e = event || window.event;
    this.params.currentX = e.clientX;
    this.params.currentY = e.clientY;
  });
  document.addEventListener('mouseup', () => {
    this.params.flag = false;
    if (this.getPosition(moveTarget, 'left') !== 'auto') {
      this.params.left = this.getPosition(moveTarget, 'left');
    }
    if (this.getPosition(moveTarget, 'top') !== 'auto') {
      this.params.top = this.getPosition(moveTarget, 'top');
    }
  });
  document.addEventListener('mousemove', (event) => {
    let e = event || window.event;
    if (this.params.flag) {
      let nowX = e.clientX, nowY = e.clientY;
      let disX = nowX - this.params.currentX, disY = nowY - this.params.currentY;
      moveTarget.style.left = parseInt(this.params.left) + disX + 'px';
      moveTarget.style.top = parseInt(this.params.top) + disY + 'px';
      if (typeof callback === 'function') {
        callback(parseInt(this.params.left) + disX, parseInt(this.params.top) + disY);
      }
    }
  });
};