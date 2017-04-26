(function() {
    'use strict';
    /*
    Task:
     The preparation instructions

     If the instructions have 50 or less characters they should be shown in full
     if the instructions have more than 50 characters, only the first 50-ish should be shown, followed by ellipsis.
     If ellipsis are shown, the last word should be shown in full (should not be cut in half)
     */
    angular
        .module('app')
        .filter('limitToElipsing', [function ($filter) {

            return function (value, max) {
                if (!value) return '';

                max = parseInt(max, 10);
                if (!max) return value;
                if (value.length <= max) return value;

                value = value.substr(0, max);
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    // Clean "," and ".".
                    if (value.charAt(lastspace-1) === ',' ||
                        value.charAt(lastspace - 1) === '.') {
                        lastspace = lastspace - 1;
                    }
                    value = value.substr(0, lastspace);
                }

                var ellipses = ' ...';
                return value + ellipses;
            };

        }]);

})();