(function(){

  angular
    .module('app')
    .controller('RecipeController', [
      '$state',
      '$stateParams',
      'recipeListService',
      '$mdDialog',
      RecipeController
    ]);

  function RecipeController($state, $stateParams, recipeList, $mdDialog) {
    var vm = this;

    console.log('recipe id:', $stateParams.recipeId);

    vm.data = recipeList.getRecipe($stateParams.recipeId);
    vm.back = function() {
      $state.go('home.recipeList');
    };

    vm.delete = function() {
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
        recipeList.deleteRecipe(vm.data.id);
        $state.go('home.recipeList');
      })
    }
  }

})();
