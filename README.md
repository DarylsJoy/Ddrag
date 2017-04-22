# Ddrag
简单的拖拽，没有使用HTML5drag/dropAPI
```html
<div class="drag-box">
  <div class="drag-bar">拖动我试试</div>
</div>
<div class="drag-box">
  <div class="drag-bar">拖动我试试</div>
</div>
```
```javascript
<script src="Ddrag.js"></script>
<script>
  const printPosition = (...args) => {
    console.log(args);
  };
  let dragBox = document.querySelectorAll('.drag-box');
  let dragBar = document.querySelectorAll('.drag-bar');
  new Ddrag(dragBar[0], dragBox[0], printPosition).init();
  new Ddrag(dragBar[1], dragBox[1]).init();
</script>
```
