/**
 * Created by massimomoro on 02/11/15.
 */
// Add card flipover

(function ($, Drupal, window, document, undefined) {

    $(document).ready(function(){


        // Add card flipover
        $('.jcarousel-row').hover(function(){
            $(this).find('.views-field-field-preview-image').addClass('highlight-card-hover');
            var width_box = $('.jcarousel').find('.jcarousel-row').width();
            $('.highlight-card-hover').css('bottom',Math.ceil(width_box) + 'px');
        }, function(){
            $(this).find('.views-field-field-preview-image').removeClass('highlight-card-hover');
            $('.views-field-field-preview-image').css('bottom',0 + 'px');
        });
        // Link highligt to dest URL
        $('.highlight-item').click(function(){
            window.location=$(this).find("a").attr("href");
            return false;
        });

        //Adjust margin-top for Events body
      //  $('.panel-col-first').css('margin-top',Math.ceil($('.field-name-field-cover-image').height()) + 'px');


    });
    $( window ).resize(function() {

        //Adjust margin-top for Events body
       // $('.panel-col-first').css('margin-top',Math.ceil($('.field-name-field-cover-image').height()) + 'px');
    });

})(jQuery, Drupal, this, this.document);