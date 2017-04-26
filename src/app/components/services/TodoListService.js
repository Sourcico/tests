(function(){
    'use strict';

    angular.module('app')
        .service('todoListService', [
            '$q',
            todoList
        ]);

    function todoList($q){
        var todos = [
            {text: 'Bread', qnt: 12, done: false},
            {text: 'Onions', qnt: 10, done: true},
            {text: 'Potatoes', qnt: 5, done: false}
        ];

        return {
            loadAllItems : function() {
                return $q.when(todos);
            }
        };
    }
})();