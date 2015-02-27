'use strict';

angular.module('declutterApp')
  .config(function($httpProvider , $interpolateProvider, $resourceProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //** django urls loves trailling slashes which angularjs removes by default.
    $resourceProvider.defaults.stripTrailingSlashes = false;
    })
  .controller('MyfriendsCtrl', function ($scope, $http, $cookies) {
          $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
          $scope.addFriend = function () {
                var data = {
                    "follower": $scope.formFriendEmail
            };
            console.log(data);


            $http.post('/api/appuser/create/follower/', data).
                success(function (data) {
                    console.log(data);
                    $scope.formFriendEmail = '';
                }).
                error(function (data) {
                    $scope.error = ["Error adding New User"];
                    console.log("error: " + data.error);
                });
        };

//            Step 1: get the follower and followee from the below below api

                $scope.arrayOfFollowers = [];
                var friends_followee = $http.get('/api/appuser/list/follower/');
                friends_followee.success(function(data){
                    for (var i=0;  i<data.length; i++) {
                        $scope.arrayOfFollowers.push(data[i]["follower"]);
                        $scope.Followee = data[i]["followee"];
                         }
                    console.log($scope.arrayOfFollowers);
                    console.log($scope.Followee);

                    $scope.friends_followee=data;

//            Step 2: Get the followers from the api    "/api/appuser/detail/follower/1/2/ "

                $scope.result_friends = [];
                for (var j=0; j<$scope.arrayOfFollowers.length; j++){
                    var friends_list = $http.get('/api/appuser/detail/follower/' + $scope.Followee + '/' + $scope.arrayOfFollowers[j] + '/');
                    friends_list.success(function(data){

                        var username =  data["username"];
                        var email =  data["email"];
                        var first_name =  data["first_name"];
                        var last_name = data["last_name"];

                        var obj = {};
                        obj["user_name"] = username;
                        obj["email"] = email;
                        obj["first_name"] = first_name;
                        obj["last_name"] = last_name;
                        $scope.result_friends.push(obj);
                        console.log(obj);

                });

                }

                    }).
                error(function(data){
                console.log("error with followees " + data);
                    });

    //$scope.removeFriend = function(followeeId, followerId){
    //    console.log("url :" + 'api/appuser/update/follower/' + followeeId + "/" + followerId + "/" );
    //    $http.delete('api/appuser/update/follower/' + followeeId + "/" + followerId + "/").
    //    success(function(data){
    //            $scope.snippet.splice(
    //                $scope.snippet.indexOf(snippet),
    //                1
    //            );
    //        }).
    //        error(function(data){
    //            $scope.error = ["Error deleting friend"];
    //        });
    //};

    $scope.removeFriend = function(followeeId, followerId) {
        console.log("url :" + 'api/appuser/update/follower/' + followeeId + "/" + followerId + "/" );
        var url = "/api/appuser/update/follower/" + followeeId + "/" + followerId + "/";
        $http.delete(url).success(function(data){
            console.log("Success");
            $scope.snippet.splice(
                $scope.snippet.indexOf(snippet),
                1
            )
        }).
        error(function(data) {
            console.log("Failure");
            });
    };


  });


