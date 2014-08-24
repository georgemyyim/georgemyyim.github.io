function main() {
  /* Push the body over by 200px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "200px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

  $('#abt').click(function() {
      event.preventDefault();
      $('html, body').animate({
          scrollTop:$('body').offset().top
        },1000);
    });
  $('#exp').click(function() {
      event.preventDefault();
      $('html, body').animate({
          scrollTop:$('#exph').offset().top
        },1000);
    });
  $('#att').click(function() {
      event.preventDefault();
      $('html, body').animate({
          scrollTop:$('#atth').offset().top
        },1000);
    });
  $('#ctm').click(function() {
      event.preventDefault();
      $('html, body').animate({
          scrollTop:$('#ctmh').offset().top
        },1000);
    });
};








$(document).ready(main);