import Ddrag from './Ddrag.js';

const printPosition = (...args) => {
 console.log(args);
};
let dragBox = document.querySelectorAll('.drag-box');
let dragBar = document.querySelectorAll('.drag-bar');
new Ddrag(dragBar[0], dragBox[0], printPosition).init();
new Ddrag(dragBar[1], dragBox[1]).init();