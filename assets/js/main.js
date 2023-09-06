$(function () {
  makeBlobs(10, 'large');
  makeBlobs(10, 'medium');
  makeBlobs(10, 'small');

  $('.blob').each(function () {
    const x = (Math.random() * 100);
    const y = (Math.random() * 100);
    const scale = 1.5 - Math.random();
    $(this).css({
      'transform': `translateX(${x}%) translateY(${y}%) scale(${scale})`
    });
  });
});

function makeBlobs(num, size) {
  let $blobs = $('.blobs');
  $blobs.append(new Array(num + 1).join(`<span class="blob blob-${size}"></span>`))
}
