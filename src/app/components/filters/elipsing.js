(function() {
    'use strict';
    /*
    Task:
     Comma separated list of ingredients

     if the recipe has 3 or less ingredients, show a complete list
     if the recipe has 4 or more ingredients, show the first three ingredients, followed by ellipsis (...)

    Plan:
    - Limit by 3
    - Array filter by property "text"
    - If > 3, append "..."
    - Stringify array, comma separated

     */
    angular
        .module('app')
        .filter('lastingred', [function ($filter) {

            return function (inputArray) {
                var data = [];

                var lastThreeArr = inputArray.slice(0, 3);
                var isGtThree = inputArray.length > 3;

                angular.forEach(lastThreeArr, function (item) {
                    data.push(item.text);
                });

                var ellipsis = isGtThree === true ? '...' : '';
                return data.join(',') + ellipsis;
            };

        }]);

})();