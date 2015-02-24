'use strict';

/**
 * @ngdoc overview
 * @name declutterApp
 * @description
 * # declutterApp
 *
 * Main module of the application.
 */
angular
  .module('declutterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
            templateURL: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/logout', {
            templateURL: 'views/logout.html',
            controller: 'LogoutCtrl'
        })
        .when('/register', {
            templateURL: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/friendscrap', {
            templateURL: 'views/friendscrap.html',
            controller: 'FriendscrapCtrl'
        })
        .when('/mycrap', {
            templateURL: 'views/mycrap.html',
            controller: 'MycrapCtrl'
        })
        .when('/mycrap/myclaimed', {
            templateURL: 'views/myclaimed.html',
            controller: 'MycrapCtrl'
        })
        .when('/mycrap/postitem', {
            templateURL: 'views/postitem.html',
            controller: 'MycrapCtrl'
        })
        .when('/mycrap/:item', {
            templateURL: 'views/edititem.html',
            controller: 'MycrapCtrl'
        })
        .when('/myfriends', {
            templateURL: 'views/myfriends.html',
            controller: 'MyfriendsCtrl'
        })
        .when('/myfriends/addfriend', {
            templateURL: 'views/addfriend.html',
            controller: 'MyfriendsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
