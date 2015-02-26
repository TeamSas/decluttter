/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
  .controller('FriendscrapCtrl', function ($scope, $http) {
    var friends = $http.get('/api/appuser/list/follower/');
        friends.success(function(data){
            for (var i=0;  i<data.length; i++) {
                console.log("api/list/follower success " + data[i].follower);
            }
            $scope.friends=data;
    }).
        error(function(data){
//        $scope.error = ["Error with friends"];
        console.log("error with friends " + data);
    });




    //   Get all the data from Item List API
    var poster_items = $http.get('/api/items/');
        poster_items.success(function(data){
            for (var i=0;  i<data.length; i++) {
                console.log("Item List API" + data[i]["poster"]["username"]);
                }
                $scope.poster_items = data;
        }).
        error(function(data){
                console.log("error with poster_items " + data);
        });
  });
