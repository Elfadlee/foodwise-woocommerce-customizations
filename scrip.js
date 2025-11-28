(function ($) {

  function moveResultCount() {
  
    if (window.innerWidth > 768) return;

    var $container = $('.ast-woocommerce-container').first();
    if (!$container.length) return;

    var $header   = $container.find('.woocommerce-products-header').first();
    var $result   = $container.find('.woocommerce-result-count').first();
    var $ordering = $container.find('.woocommerce-ordering').first();


    if ($header.length && $result.length) {
   
      $result.insertAfter($header);
    }


    if ($result.length && $ordering.length) {
  
      $ordering.insertAfter($result);
    }
  }


  $(document).ready(moveResultCount);


  $(window).on('load', moveResultCount);


  $(document.body).on('updated_wc_div', moveResultCount);


  $(window).on('resize', moveResultCount);

})(jQuery);
