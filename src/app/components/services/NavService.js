(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Recipes',
        icon: 'view_module',
        sref: '.recipeList'
      },
      {
        name: 'New Recipe',
        icon: 'view_module',
        sref: '.recipe-entry'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
