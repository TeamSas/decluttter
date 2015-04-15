'use strict';

angular.module('declutterApp')
  .controller('LogoutCtrl', function ($scope, $location, $timeout, $rootScope, $window, djangoAuth) {
    $rootScope.logname='';
    djangoAuth.logout();
    $window.location.href = "/";
   });
