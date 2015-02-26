/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
  .controller('FriendscrapCtrl', function ($scope, $http) {
//    $http.get('/api/appuser/list/follower/').success(function(data) {
//        console.log(data);
//        $scope.friends = data;
//    }).
//    error(function(data, status, headers, config) {
//    });
//  });


    var friends = $http.get('/api/appuser/list/follower/');
        friends.success(function(data){
            console.log(data);
            $scope.friends=data;
    });
    friends.error(function(data){
        $scope.error = ["Error with items"];
        console.log("error" + data);
    });
  });