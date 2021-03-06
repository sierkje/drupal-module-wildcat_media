/**
 * @file wildcat_media_gallery.view.js
 */
(function ($, Drupal) {

    "use strict";

    /**
     * Registers behaviours related to media views.
     */

    Drupal.behaviors.WildcatMediaView = {
        attach: function (context) {
            var $view = $('.view-content');
            $view.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>').once();

            // Indicate that images are loading.
            $view.append('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
            $view.imagesLoaded(function () {
                // Save the scroll position.
                var scroll = document.body.scrollTop;
                // Remove old Masonry object if it exists. This allows modules like
                // Views Infinite Scroll to function with Wildcat Media.
                if ($view.data('masonry')) {
                    $view.masonry('destroy');
                }
                $view.masonry({
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    isFitWidth:true
                });
                // Jump to the old scroll position.
                document.body.scrollTop = scroll;
                // Add a class to reveal the loaded images, which avoids FOUC.
                $('.grid-item').addClass('item-style');
                $view.find('.ajax-progress').remove();
            });
        }
    };

}(jQuery, Drupal));
