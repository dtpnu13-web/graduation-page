const content = document.querySelector(".distort");
let currentPos = window.pageYOffset;

const callDistort = function() {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.1;

  content.style.transform = "skewY(" + speed + "deg)";
  currentPos = newPos;
  requestAnimationFrame(callDistort);
};

callDistort();