/**
 * @file wildcat_media_gallery.view.js
 */
(function ($, Drupal) {

    "use strict";

    /**
     * Registers behaviours related to view widget.
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

            $('.grid-item').has('.views-field-entity-browser-select').once('grid-item-click-event').on('click', function () {
                var input = $(this).find('.views-field-entity-browser-select input');
                input.prop('checked', !input.prop('checked'));
                if (input.prop('checked')) {
                    $(this).addClass('checked');
                }
                else {
                    $(this).removeClass('checked');
                }
            });
        }
    };

}(jQuery, Drupal));
