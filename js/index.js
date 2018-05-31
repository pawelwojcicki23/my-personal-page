$('.navbar-item').each(function(e) {
    $(this).click(function(){
      if($('#navbar-burger-id').hasClass('is-active')){
        $('#navbar-burger-id').removeClass('is-active');
        $('#navbar-menu-id').removeClass('is-active');
      }
    });
  });

  // Open or Close mobile & tablet menu
  $('#navbar-burger-id').click(function () {
    if($('#navbar-burger-id').hasClass('is-active')){
      $('#navbar-burger-id').removeClass('is-active');
      $('#navbar-menu-id').removeClass('is-active');
    }else {
      $('#navbar-burger-id').addClass('is-active');
      $('#navbar-menu-id').addClass('is-active');
    }
  });

  $('[data-fancybox="images"]').fancybox({
    afterLoad : function(instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;
  
      if ( pixelRatio > 1.5 ) {
        current.width  = current.width  / pixelRatio;
        current.height = current.height / pixelRatio;
      }
    }
  });

  $('[data-fancybox]').fancybox({
    protect: true
  });