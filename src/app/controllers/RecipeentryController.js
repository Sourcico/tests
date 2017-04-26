(function () {
    angular
        .module('app')
        .controller('RecipeentryController', [
            'todoListService',
            'recipeListService',
            'newrecipeService',
            RecipeentryController
        ]);

    function RecipeentryController(todoListService, recipeListService, newrecipeService) {
        var vm = this;

        vm.addTodo = addTodo;
        vm.remaining = remaining;
        vm.archive = archive;
        vm.toggleAll = toggleAll;
        vm.todoPreparationTime = {
            hours: 0,
            minutes: 0
        };
        vm.todos = [];

        todoListService
            .loadAllItems()
            .then(function (todos) {
                vm.todos = [].concat(todos);
            });

        function addTodo() {
            var ingredient = newrecipeService.getCurrentIngredientItem();


            if (!vm.todoQnt) return;
            vm.todos.push({text: ingredient.value, qnt: vm.todoQnt, done: false});
            vm.todoQnt = '';
            console.log(vm.todoIngredientItem);
            vm.clean();
        }

        vm.remove = function(chip) {
            console.log('rm chip:', chip);
        };
        vm.createRecipe = function ($event) {
            var recipe = {
                name: vm.todoName,
                source : vm.todoSource,
                instructions : vm.todoInstructions,
                preparationTime : vm.todoPreparationTime,
                ingredients: vm.todos
            };

            recipeListService.createRecipe(recipe);
            console.log(recipeListService.loadAllItems());
        };

        function remaining() {
            var count = 0;
            angular.forEach(vm.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        }

        function archive(e) {
            // Prevent from submitting
            e.preventDefault();
            var oldTodos = vm.todos;
            vm.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) vm.todos.push(todo);
            });
        }

        function toggleAll() {
            if (remaining() == 0) {
                angular.forEach(vm.todos, function (todo) {
                    todo.done = false;
                });
            } else {
                angular.forEach(vm.todos, function (todo) {
                    todo.done = true;
                });
            }
        }
    }
})();
