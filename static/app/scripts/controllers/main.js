'use strict';

/**
 * @ngdoc function
 * @name declutterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the declutterApp
 */
angular.module('declutterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   });
