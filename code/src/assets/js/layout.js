(function ($) {
    'use strict';

    function initLoad() {
        $(window).on('load', function () {
            $('#loader').delay(500).fadeOut();
            $('#mask').delay(1000).fadeOut('slow');
        })
    }

    function init() {
        initLoad();
    }

    init();
})(jQuery);