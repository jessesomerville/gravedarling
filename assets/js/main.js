$(function () {
  // makeBlobs(10, 'large');
  // makeBlobs(10, 'medium');
  makeBlobs(30, 'medium');

  $('.blob').each(function () {
    console.log($(this).position());
    const dx = (Math.random() * 200) - 100;
    const dy = (Math.random() * 100) - 50;
    const scale = 1.5 - Math.random();
    const dur = (Math.random() * 20) + 10;
    const rot = Math.random() * 180;
    $(this).css({
      'transform': `translateX(${dx}%) translateY(${dy}%) scale(${scale})`,
      'animation-duration': `${dur}s`,
      'rotate': `${rot}deg`
    });
  });
});

function makeBlobs(num, size) {
  let $blobs = $('.blobs');
  $blobs.append(new Array(num + 1).join(`<span class="blob blob-${size}"></span>`))
}
