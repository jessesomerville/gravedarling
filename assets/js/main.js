const blurScale = 120;
const bezierScale = 2750;

document.addEventListener('DOMContentLoaded', function () {
  scaleGooBlur();
  const blobs = document.querySelectorAll('.blob');
  for (const e of blobs) {
    e.style.setProperty('--diameter', randomInRange(8, 12) + '%');

    e.style.setProperty('--a1', randomInRange(0, 1) + 'deg');
    e.style.setProperty('--a2', randomInRange(0, 1) + 'deg');
    e.style.setProperty('--d1', randomInRange(0, 0.9) + 'px');
    e.style.setProperty('--d2', randomInRange(0, 0.9) + 'px');
    e.style.setProperty('--da1', randomInRange(9, 30) + 's');
    e.style.setProperty('--da2', randomInRange(9, 30) + 's');
    e.style.setProperty('--dd1', randomInRange(9, 30) + 's');
    e.style.setProperty('--dd2', randomInRange(9, 30) + 's');
  }
});

window.addEventListener('resize', function () {
  scaleGooBlur();
  const blobs = document.querySelectorAll('.blob');
  for (const e of blobs) {
    const d1a = scaleGooBezier(e.style.getPropertyValue('--d1'));
    const d2a = scaleGooBezier(e.style.getPropertyValue('--d2'));
    e.style.setProperty('--d1', d1a);
    e.style.setProperty('--d2', d2a);
  }
});

function scaleGooBlur() {
  const σ = window.innerWidth / blurScale;
  document.getElementById('goo-blur').setAttribute('stdDeviation', σ);
}

function scaleGooBezier(d1) {
  const d1a = d1.slice(0, -2);
  if (Number.isNaN(Number.parseFloat(d1a))) {
    return d1;
  }
  return parseFloat(d1a) / bezierScale + 'px';
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
