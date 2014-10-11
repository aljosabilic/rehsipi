angular.module('migrozept', ['ionic', 'rehsipi.services', 'rehsipi.controllers', 'ngCordova'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
    })

    .state('app.start', {
        url: "/start",
        views: {
            'menuContent': {
                templateUrl: "templates/start.html",
                controller: "StartCtrl"
            }
        }
    })

    .state('app.recipe_list', {
          url: "/recipe_list/:search_parameter",
          views: {
              'menuContent': {
                  templateUrl: "templates/recipe_list.html",
                  controller: "RecipeListCtrl"
              }
          }
      })

      .state('app.recipe_details', {
          url: "/recipes/:recipe_id",
          views: {
              'menuContent': {
                  'templateUrl': "templates/recipe_details.html",
                  controller: "RecipeDetailsCtrl"
              }
          }
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');

});

