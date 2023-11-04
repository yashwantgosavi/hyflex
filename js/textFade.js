const $paragraph = $("p,li,a,h1,h2,h3,h4,h5,h6,b");
$(window).scroll(function() {
  $paragraph.each(function() {
    const paragraphMiddle = $(this).offset().top + 0.5 * $(this).height();
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (paragraphMiddle < windowBottom) {
      $(this).addClass("textFade");
    }
  });
});
$(window).scroll();
