(function(){

  angular
    .module('app')
    .controller('TableController', [
      'recipeListService',
      '$mdDialog',
      '$state',
      TableController
    ]);

  function TableController(recipeList, $mdDialog, $state) {
    var vm = this;

    vm.tableData = [];



    vm.loadItems = function () {
      recipeList
        .loadAllItems()
        .then(function(tableData) {
          vm.tableData = [].concat(tableData);
        });
    };

    vm.showAlert = function(recipe) {
      console.log('recipeId:', recipe);
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.confirm()
                .parent(angular.element(document.querySelector('#table')))
                .clickOutsideToClose(true)
                .title('Recipe delete!')
                .textContent('Are you sure you want to delete the recipe ?')
                .ariaLabel('Confirm recipe delete')
                .cancel('Reject')
                .ok('Confirm!')
                // .targetEvent(ev)
        ).then(function (event) {
            console.log('doing stuff');
            recipeList.deleteRecipe(recipe.id);
            vm.loadItems();
        })
    };

    vm.openRecipe = function(data) {
        $state.go('home.recipe', {recipeId: data.id});
    };

    vm.loadItems();
  }

})();
