// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// leaflet-directive, 'google-maps'
angular.module('rehsipi', ['ionic', 'rehsipi.services', 'rehsipi.controllers'])


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

    .state('app.login', {
        url: "/login",
        views: {
            'menuContent': {
                templateUrl: "templates/login.html",
                controller: "LoginCtrl"
            }
        }
    })

    .state('app.logout', {
        url: "/logout",
        views: {
            'menuContent': {
                templateUrl: "templates/logout.html",
                controller: "LogoutCtrl"
            }
        }
    })

    .state('app.ask', {
        url: "/ask",
        views: {
            'menuContent': {
                templateUrl: "templates/ask.html",
                controller: "MapCtrl"
            }
        }
    })

    .state('app.tell', {
        url: "/tell",
        views: {
            'menuContent': {
                templateUrl: "templates/tell.html",
                controller: "TellCtrl"
            }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');

});

