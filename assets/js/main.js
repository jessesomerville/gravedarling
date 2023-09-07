$(function () {
  $('.blob').each(function () {
    console.log($(this).position());
    const dx = (Math.random() * 200) - 100;
    const dy = (Math.random() * 100) - 50;
    const scale = 1.5 - Math.random();
    const rot = Math.random() * 180;
    const dur = (Math.random() * 20) + 10;
    $(this).css({
      'transform': `translate(${dx}%, ${dy}%) scale(${scale}) rotate(${rot}deg)`,
      'animation-duration': `${dur}s`,
    });
  });
});