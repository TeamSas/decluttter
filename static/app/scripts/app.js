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
            controller: 'FriendscrapCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
          }],
        }
        })
        .when('/mycrap', {
            templateUrl: 'views/mycrap.html',
            controller: 'MycrapCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
        .when('/mycrap/myclaimed', {
            templateUrl: 'views/myclaimed.html',
            controller: 'MyclaimedCtrl',
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
        .when('/mycrap/postitem', {
            templateUrl: 'views/postitem.html',
            controller: 'MycrapCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
        .when('/mycrap/:item', {
            templateUrl: 'views/edititem.html',
            controller: 'MycrapCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
        .when('/myfriends', {
            templateUrl: 'views/myfriends.html',
            controller: 'MyfriendsCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
        .when('/myfriends/addfriend', {
            templateUrl: 'views/addfriend.html',
            controller: 'MyfriendsCtrl',
            resolve: {
            authenticated: ['djangoAuth', function(djangoAuth){
            return djangoAuth.authenticationStatus();
            }],
            }
        })
      .otherwise({
        redirectTo: '/'
      });
  });
