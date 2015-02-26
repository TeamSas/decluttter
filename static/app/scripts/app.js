'use strict';

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
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'LogoutCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/friendscrap', {
            templateUrl: 'views/friendscrap.html',
            controller: 'FriendscrapCtrl'
        })
        .when('/mycrap', {
            templateUrl: 'views/mycrap.html',
            controller: 'MycrapCtrl'
        })
        .when('/mycrap/myclaimed', {
            templateUrl: 'views/myclaimed.html',
            controller: 'MyclaimedCtrl'
        })
        .when('/mycrap/postitem', {
            templateUrl: 'views/postitem.html',
            controller: 'MycrapCtrl'
        })
        .when('/mycrap/:item', {
            templateUrl: 'views/edititem.html',
            controller: 'MycrapCtrl'
        })
        .when('/myfriends', {
            templateUrl: 'views/myfriends.html',
            controller: 'MyfriendsCtrl'
        })
        .when('/myfriends/addfriend', {
            templateUrl: 'views/addfriend.html',
            controller: 'MyfriendsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
