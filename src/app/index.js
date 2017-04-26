'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app' , 'md.data.table',
    'restangular'
])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        data: {
          title: 'Profile'
        }
      })
      .state('home.recipe', {
        url: '/recipe/{recipeId}',
        templateUrl: 'app/views/recipe.html',
        controller: 'RecipeController',
        controllerAs: 'vm',
        data: {
          title: 'Recipe'
        }
      })
      .state('home.recipeList', {
        url: '/recipe-list',
        controller: 'TableController',
        controllerAs: 'vm',
        templateUrl: 'app/views/table.html',
        data: {
          title: 'Table'
        }
      })
      .state('home.recipe-entry', {
          url: '/recipe-entry',
          controller: 'RecipeentryController',
          controllerAs: 'vm',
          templateUrl: 'app/views/recipe-entry.html',
          data: {
              title: 'Add new recipe...'
          }
      })
      ;

    $urlRouterProvider.otherwise('/recipe-list');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  })

  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setExtraFields(['name']);
    RestangularProvider.setResponseExtractor(function(response, operation) {
        return response.data;
    });

    // RestangularProvider.addElementTransformer('accounts', false, function(element) {
    //     element.accountName = 'Changed';
    //     return element;
    // });
    //
    // RestangularProvider.setDefaultHttpFields({cache: true});
    // RestangularProvider.setMethodOverriders(["put", "patch"]);
    //
    // // In this case we are mapping the id of each element to the _id field.
    // // We also change the Restangular route.
    // // The default value for parentResource remains the same.
    // RestangularProvider.setRestangularFields({
    //     id: "_id",
    //     route: "restangularRoute",
    //     selfLink: "self.href"
    // });
    //
    // RestangularProvider.setRequestSuffix('.json');
    //
    // // Use Request interceptor
    // RestangularProvider.setRequestInterceptor(function(element, operation, route, url) {
    //     delete element.name;
    //     return element;
    // });
    //
    // // ..or use the full request interceptor, setRequestInterceptor's more powerful brother!
    // RestangularProvider.setFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
    //     delete element.name;
    //     return {
    //         element: element,
    //         params: _.extend(params, {single: true}),
    //         headers: headers,
    //         httpConfig: httpConfig
    //     };
    // });

})
;