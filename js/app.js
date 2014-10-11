// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// leaflet-directive, 'google-maps'
angular.module('rehsipi', ['ionic', 'rehsipi.services', 'rehsipi.controllers', 'ngCordova'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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

