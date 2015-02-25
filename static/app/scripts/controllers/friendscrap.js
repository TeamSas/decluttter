/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
  .controller('FriendscrapCtrl', function ($scope, $http) {
    $http.get('/api/items/').success(function(data) {
        $scope.items = data;
    }).
  error(function(data, status, headers, config) {
    });
  });
