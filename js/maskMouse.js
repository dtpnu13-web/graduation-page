/*! Copyright (c) 2020 by Craig Roblewsky (https://codepen.io/PointC/pen/KRWgOK)*/
const svg = document.querySelector("#main-svg_bg");
const tl2 = new gsap.timeline({onUpdate:onUpdate});
let pt = svg.createSVGPoint();
const ratio = 0.4625;

tl2.to("#masker, #bubble", { duration: 2, attr: { r: 2400 }, ease: "power2.in" });
tl2.reversed(true);

function mouseHandler() {
	tl2.reversed(!tl2.reversed());
}

function getPoint(evt) {
	pt.x = evt.clientX;
	pt.y = evt.clientY;
	return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function mouseMove(evt) {
  let newPoint = getPoint(evt);
  gsap.to("#ring, #masker, #bubble", 0.88, { attr: {cx: newPoint.x, cy:newPoint.y }, ease:"power2.out" });
 }

function onUpdate() {
	let prog = (tl2.progress() * 100);
}

var oldWidth = 0;
function newSize() {
  var w = window.innerWidth;

    if(oldWidth !== w){
     oldWidth = w;

      var h = window.innerHeight;
      if (w > h * (16/9) ) {
        // gsap.set("#main-svg_bg", {attr: {width: w, height: w * ratio} });
      } else {
        // gsap.set("#main-svg_bg", {attr: {width: h / ratio, height: h} });
        gsap.set("#row-1", {attr: {x: "37%", y: "67%"} });
        gsap.set("#row-2", {attr: {x: "37%", y: "75%"} });
        gsap.set("#row-3", {attr: {x: "37%", y: "83%"} });
        gsap.set("#masker", {attr: {cx: "50%", cy: "70%"} });
      }
      let data = svg.getBoundingClientRect();
      // gsap.set("#main-svg_bg", {x:w/2 - data.width/2});
      // gsap.set("#main-svg_bg", {y:h/2 - data.height/2});
    }
}

window.addEventListener("mousedown", mouseHandler);
window.addEventListener("mouseup", mouseHandler);
window.addEventListener("mousemove", mouseMove);

newSize();
window.addEventListener("resize", newSize);

// CURSOR //////////////////////////////////
gsap.set(".circle", {xPercent: -60, yPercent: -60});
gsap.set("#bubble", {xPercent: -50, yPercent: -55});

var circle = document.querySelector(".circle");
var circle = document.querySelector("#bubble");
var pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
var mouse = {x: pos.x, y: pos.y};
var speed = 0.2;

var xSet = gsap.quickSetter(circle, "x", "px");
var ySet = gsap.quickSetter(circle, "y", "px");
var xSet = gsap.quickSetter(bubble, "x", "px");
var ySet = gsap.quickSetter(bubble, "y", "px");

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  xSet(pos.x);
  ySet(pos.y);
});

function hoverFunc(e) {
  gsap.to(circle, {duration: 0.3, opacity: 1, scale: 0});
  gsap.to(circle, {duration: 0.3, scale: 0.5});
}

function unhoverFunc(e) {
  gsap.to(circle, {duration: 0.3, opacity: 1, scale: 1});
  gsap.to(circle, {duration: 0.3, scale: 1});
}

var atags = document.querySelectorAll("a");
  atags.forEach(function(a) {
    a.addEventListener("mouseover", hoverFunc);
    a.addEventListener("mouseleave", unhoverFunc);
  });


// let myDiv = document.getElementById("bubble");
// //Detect touch device
// function isTouchDevice() {
//   try {
//     //We try to create TouchEvent. It would fail for desktops and throw error
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// const move = (e) => {
//   //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
//   try {
//     //PageX and PageY return the position of client's cursor from top left of screen
//     var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//     var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
//   } catch (e) {}
//   //set left and top of div based on mouse position
//   myDiv.style.left = x - 50 + "px";
//   myDiv.style.top = y - 50 + "px";
// };
// //For mouse
// document.addEventListener("mousemove", (e) => {
//   move(e);
// });
// //For touch
// document.addEventListener("touchmove", (e) => {
//   move(e);
// });