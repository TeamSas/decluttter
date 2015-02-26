'use strict';

/**
 * @ngdoc function
 * @name declutterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the declutterApp
 */
angular.module('declutterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('AboutCtrl loaded');
  });
