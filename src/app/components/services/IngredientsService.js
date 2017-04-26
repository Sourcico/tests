(function(){
  'use strict';

  angular.module('app')
    .service('ingredientsService', [
      ingredientsService
    ]);

  function ingredientsService(){
    var allIngredients = [
        {name:'Flour', 'code': ''},
        {name:'Milk ', 'code': ''},
        {name:'Oil  ', 'code': ''},
        {name:'Salt ', 'code': ''},
        {name:'Sugar', 'code': ''},
        {name:'Eggs ', 'code': ''},
        {name:'Tomat', 'code': ''},
        {name:'Peppe', 'code': ''},
        {name:'Chees', 'code': ''},
        {name:'Potat', 'code': ''}
    ];

      return {
      loadAll : function() {
        return allIngredients.map(function(ingredient) {
          return {
            value: ingredient.name.toLowerCase(),
            display: ingredient.name,
            code: ingredient.code
          };
        });
      }
    };
  }

})();
