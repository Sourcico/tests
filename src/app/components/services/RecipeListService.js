(function(){
    'use strict';

    angular.module('app')
        .service('recipeListService', [
            '$q',
            recipeList
        ]);

    function recipeList($q){
        var recipes = [
            {id: 1, name: 'Home bread recipe', source: 'wiki', instructions: 'Far far away, behind the word mountains, far from the countries.', preparationTime: { hours : 0, minutes : 5 }, ingredients: [{text: "Oil", qnt: 2}, {text: "Coffee", qnt: 5}], archived: false},
            {id: 2, name: 'Home made pizza', source: 'youtube', instructions: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV', preparationTime: { hours : 1, minutes : 5 }, ingredients: [{text: "Bla", qnt: 6}, {text: "Juice", qnt: 10}, {text: "Coke", qnt: 10}], archived: false},
            {id: 3, name: 'Home made pancakes', source: 'daily motion', instructions: 'The quick, brown fox', preparationTime: { hours : 1, minutes : 5 }, ingredients: [{text: "Stuff", qnt: 6}, {text: "Olive Oil", qnt: 2}, {text: "Juice", qnt: 10}, {text: "Coke", qnt: 10}], archived: false}
        ];

        return {
            loadAllItems : function() {
                return $q.when(recipes);
            },
            getRecipe : function (recipeId) {
              var result = null;
              recipes.forEach(function (recipe) {
                if(recipe.id+'' === recipeId+'') {
                  result = recipe;
                }
              });

              return result;
            },
            createRecipe : function (recipe) {
                // Remove after inserting proper backend
                recipe.id = ( ( (1+Math.random())*0x10000)|0 ).toString(16).substring(1);
                recipes.push(recipe);
            },
            deleteRecipe : function (recipeId) {
                recipes.forEach(function (recipe, inx) {
                  if(recipe.id === recipeId) {
                    console.log('item recipe:', inx);
                    recipes.splice(inx, 1);
                    return false;
                  }
                });
            }
        };
    }
})();

