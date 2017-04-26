(function(){
  'use strict';

  angular.module('app')
    .service('newrecipeService', [
        NewrecipeService
    ]);

  function NewrecipeService(){
    var recipeItem = {
        "recipeName" : "",
        "recipeSource": "",
        "recipeIngredients": []
    };

    var recipeCurrentIngredient = {
        "recipeIngredientItem": null,
        "recipeIngredientQnt": 0
    };

    return {
      getCurrent : function () {
          return recipeItem;
      },
      setName : function (value) {
          console.log('setting value', value);
          recipeItem.recipeName = value;
      },
      setSource : function (value) {
          recipeItem.recipeSource = value;
      },
      appendIngredient : function (value) {
          recipeItem.recipeIngredients.push(value);
      },
      setCurrentIngredientItem : function (item) {
        recipeCurrentIngredient.recipeIngredientItem = item;
      },
      getCurrentIngredientItem : function () {
        return recipeCurrentIngredient.recipeIngredientItem;
      },
      setCurrentIngredientQnt : function (value) {
        recipeCurrentIngredient.recipeIngredientItem = value;
      },
      getCurrentIngredientQnt : function () {
        return recipeCurrentIngredient.recipeIngredientItem;
      },
      save : function () {
        console.log('Saving item');
        /*
        - Call service that keeps recipe items and push the item
         */
      },
      loadAll : function() {
        // return allCountries.map(function(country) {
        //   return {
        //     value: country.name.toLowerCase(),
        //     display: country.name,
        //     code: country.code
        //   };
        // });
      }
    };
  }

})();
