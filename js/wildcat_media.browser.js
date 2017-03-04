/**
 * @file wildcat_media_gallery.browser.js
 */
(function ($, Drupal) {

    "use strict";

    /**
     * Registers behaviours related to media browser widgets.
     */

    Drupal.behaviors.WildcatMediaBrowser = {
        attach: function (context) {
            $('.grid-item').once('grid-item-click-event').on('click', function () {
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
