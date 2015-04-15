'use strict';

angular.module('declutterApp')


  .controller('FriendscrapCtrl', function ($scope, $q, $http) {

        //  Step 1:  Get all the data from Item List API

        var poster_items = $http.get('/api/items/');

        var posterItems = function() {
            var deferred = $q.defer();
            poster_items.success(function (data) {
                $scope.arrayOfObjects = [];
                for (var i = 0; i < data.length; i++) {
                    var userId = data[i]["poster"]["id"];
                    var userName = data[i]["poster"]["username"];
                    var item_Name = data[i]["item_name"];
                    var availability = data[i]["availability"];
                    var desc = data[i]["description"];
                    var item_id = data[i]["id"];
                    // var item_index = counter +=1;

                    // Initialize with empty object and then add user & item details
                    var obj = {};
                    obj["poster_id"] = userId;
                    obj["username"] = userName;
                    obj["item"] = item_Name;
                    obj["desc"] = desc;
                    obj["item_id"] = item_id;
                    obj["availability"] = availability;
                    // obj["item_index"] = item_index;

                    $scope.arrayOfObjects.push(obj);

                }
                $scope.poster_items = data;
                deferred.resolve($scope.arrayOfObjects);
            }).
                error(function (data) {
                    console.log("error with poster_items " + data);
                });
            return deferred.promise;
    };
            posterItems().then(function(data){
                console.log(data);
        });



        // Step 2: Get all followers from follower list
        var friends = $http.get('/api/appuser/list/follower/');
        var friendsItems = function() {
            var task2 = $q.defer();
            $scope.arrayOfFollowers = [];

            friends.success(function (data1) {
                for (var i = 0; i < data1.length; i++) {
                    $scope.arrayOfFollowers.push(data1[i]["follower"]);
                }
                $scope.friends = data1;
                task2.resolve($scope.arrayOfFollowers);
                $scope.currentUser = data1[0]["followee"];
                console.log($scope.currentUser);
            }).
                error(function (data1) {
                    console.log("error with friends " + data1);
                });

            return task2.promise;
        };
        friendsItems().then(function(followers){
            posterItems().then(function(objects){
               friends_crap(followers, objects);
            });
        });




        // Step 3: This function will produce resulting array of objects

            var friends_crap = function(Followers, Objects){
            $scope.resultArray = [];

            for (var i=0; i<Followers.length; i++) {
                for (var j = 0; j < Objects.length; j++) {
                    if (Followers[i] === Objects[j]["poster_id"]) {
                        console.log("The Followers index values is "+ Followers[i]);
                        console.log("You are looking at objects poster ID " + Objects[j]["poster_id"]);
                        $scope.resultArray.push(Objects[j]);
                        console.log("result array's length after each inner loop " + $scope.resultArray.length);
                    }
                    else {
                        console.log("no match found");
                    }
                }
            }

        };

        $scope.claim = function(itemId, itemIndex){
            var url = "/api/items/update/" + itemId + "/";
            var claimUpdate = {"availability": false, "claimer": $scope.currentUser };
            $http.patch(url, claimUpdate).success(function(data){
                console.log("Success");
                console.log("poster_id :" + $scope.currentUser);
                $scope.resultArray.splice(itemIndex, 1);
                console.log("ItemIndex :" + itemIndex);
            }).
            error(function(data){
                console.log("Failure");
            });
        };


    });

