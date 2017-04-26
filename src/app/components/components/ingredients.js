(function() {
    'use strict';

    angular
        .module('app')

        .component('ingredients', {
            bindings: {
                count: '='
            },
            controller: ingredientsComponent,
            controllerAs: 'vm',
            templateUrl: 'app/views/partials/autocompleteIngredients.html'
        });

    function ingredientsComponent($scope, $timeout, $q, ingredientsService, newrecipeService) {
        var vm = this;

        vm.ingredients = ingredientsService.loadAll();
        vm.selectedCountry = null;
        vm.searchText = null;
        vm.querySearch = querySearch;
        vm.disableCaching = true;

        $scope.$parent.vm.clean = function() {
            vm.selectedCountry = null;
            vm.searchText = null;
        };


        $scope.$watch('vm.selectedCountry', function(value){
            if (value === null || value === undefined) return;
            $scope.todoIngredientItem = value;
            $scope.vm.todoIngredientItem = value;
            $scope.$parent.vm.todoIngredientItem = value;
            newrecipeService.setCurrentIngredientItem(value);
        });


        function querySearch (query) {
            console.log('querySearch...');
            var results = query ? vm.ingredients.filter( createFilterFor(query) ) : [],
                deferred;
            deferred = $q.defer();
            // $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            deferred.resolve( results );
            return deferred.promise;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
})();