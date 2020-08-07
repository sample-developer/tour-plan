$(document).ready(function () {
  var hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
      enable: true,
      pageUpDown: false,
    },

  });

  var reviewSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      enable: true,
      pageUpDown: false,
    },

  });

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass("navbar-bottom--visible");
    $('body').toggleClass('body__open-modal');
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);


  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
    $('body').addClass('body__open-modal')
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
    $('body').removeClass('body__open-modal')
  };


  $(document).on('keydown', function (e) {
    if (e.keyCode == 27)
      var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('body').removeClass('body__open-modal');
  });
  //Обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone required"
        },
      }
    });
  })
  $('.subscribe').validate({
    errorClass: "invalid-sub",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Phone required"
      },
    }
  });

  $('.input__tel').mask('+7 (000) 000-00-00');


  //активация карты по наведению мыши 


  $(".map__image").mouseover(function () {
    $(".map__image").addClass("map__image--dn");
    let map;

    function initMap() {
      var opt = {
        center: {
          lat: 41.011845,
          lng: 39.615020
        },
        zoom: 8
      }
      map = new google.maps.Map(document.getElementById("map"), opt);
    }
    initMap();
  });

  AOS.init();
});