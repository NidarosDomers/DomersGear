// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'domers.constants', 'domers.pads', 'domers.helmets', 'domers.players'])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    });

    $stateProvider.state('app.new-player', {
      url: '/players/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/players-new.html',
          controller: 'NewPlayerCtrl'
        }
      }
    });

    $stateProvider.state('app.new-pad', {
      url: '/pads/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/pads-new.html',
          controller: 'NewPadsCtrl'
        }
      }
    });

    $stateProvider.state('app.pads', {
      url: '/pads',
      views: {
        'menuContent': {
          templateUrl: 'templates/pads.html',
          controller: 'PadsCtrl'
        }
      }
    });

    $stateProvider.state('app.pads-details', {
      url: '/pads/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
          controller: 'PadsDetailController'
        }
      }
    });

    $stateProvider.state('app.new-helmet', {
      url: '/helmets/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/helmets-new.html',
          controller: 'NewHelmetsCtrl'
        }
      }
    });

    $stateProvider.state('app.helmets', {
      url: '/helmets',
      views: {
        'menuContent': {
          templateUrl: 'templates/helmets.html',
          controller: 'HelmetsCtrl'
        }
      }
    });

    $stateProvider.state('app.helmets-details', {
      url: '/helmets/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
          controller: 'HelmetsDetailsCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/pads');
  });
