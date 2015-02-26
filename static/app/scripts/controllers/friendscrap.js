/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
  .controller('FriendscrapCtrl', function ($scope, $http) {
        var arrayOfFollowers = [];
        var friends = $http.get('/api/appuser/list/follower/');
        friends.success(function(data){
            for (var i=0;  i<data.length; i++) {
                 arrayOfFollowers.push(data[i]["follower"]);
                 }
            console.log(arrayOfFollowers);
            $scope.friends=data;
    }).
        error(function(data){
        console.log("error with friends " + data);
    });




    //   Get all the data from Item List API
    var arrayOfObjects = [];
    var poster_items = $http.get('/api/items/');
        poster_items.success(function(data){
            for (var i=0;  i<data.length; i++) {
                var userName =  data[i]["poster"]["username"];
                var userId = data[i]["id"];
                var item_Name = data[i]["item_name"];
                // Initialize with empty object and then add user & item details
                var obj = {};
                obj["id"] = userId;
                obj["username"] = userName;
                obj["item"] = item_Name;
                arrayOfObjects.push(obj);
            }
            console.log(arrayOfObjects);
                $scope.poster_items = data;
        }).
        error(function(data){
                console.log("error with poster_items " + data);
        });
  });

