$(window).scroll(function () {
    var a = $(this).scrollTop();
  $(".paralax__boll").css("top", (1180 + a / 4));
  $(".paralax__big_bone").css("top", (2268 + a / 3));
  $(".paralax__toy").css("top", (4043 + a / 6));
  $(".paralax__Toy_circle").css("top", (4864 + a / 5));



})





$(document).ready(function() {

  $(function () {
    var headerHieght = $(window).height();
    var slideHieght = $(window).height() - 355;
  var   headerWidth = $(window).width();
    console.log(headerWidth);
       if(headerWidth > 960){
        $(".header").css("height", headerHieght);

        $(".main__slider").css("height", slideHieght);
      }





  });




    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var navBtnId = 0;
    var translateWidth = 0;



    $(function() {
          $('.we_have__btn').click(function(e) {
              var $buttons = $('.have__hissen');

              if ($buttons.css('display') != 'block') {
                  $buttons.show();

                  var firstClick = true;
                  $(document).bind('click.myEvent', function(e) {
                      if (!firstClick && $(e.target).closest('.have__hissen').length == 0) {
                          $buttons.hide();
                          $(document).unbind('click.myEvent');
                      }
                      firstClick = false;
                  });
              }

              e.preventDefault();
          });
      });




  var switchInterval = setInterval(nextSlide, slideInterval);

  $('').hover(function() {
    clearInterval(switchInterval);
  }, function() {
    switchInterval = setInterval(nextSlide, slideInterval);
  });

  $('#next-btn').click(function() {
    nextSlide();
  });

  $('#prev-btn').click(function() {
    prevSlide();
  });

  $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#viewport').width() * (navBtnId);
      $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
    }
  });



function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$('#viewport').width() * (slideCount - 1);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$('#viewport').width() * (slideNow - 2);
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
  }
}




  $('a#go').click(function (event) { // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function () { // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click(function () { // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function () { // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });


  if (window.matchMedia("(max-width: 960px)").matches) {
    $(".mobile__menu").addClass("menu");
    $(".hamburger").show();
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
      $(".menu").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
      });
    });

    $(".cross").click(function () {
      $(".menu").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
      });
    });
  }

















});