'use strict';

angular.module('declutterApp')
  .config(function($httpProvider , $interpolateProvider, $resourceProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //** django urls loves trailling slashes which angularjs removes by default.
    $resourceProvider.defaults.stripTrailingSlashes = false;
    })
  .controller('MyfriendsCtrl', function ($scope, $http, $cookies, $location) {
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
                var counter = -1;
                for (var j=0; j<$scope.arrayOfFollowers.length; j++){
                    var friends_list = $http.get('/api/appuser/detail/follower/' + $scope.Followee + '/' + $scope.arrayOfFollowers[j] + '/');
                    friends_list.success(function(data){
                        
                        var follower_id = data["id"];
                        var username =  data["username"];
                        var email =  data["email"];
                        var first_name =  data["first_name"];
                        var last_name = data["last_name"];
                        var arrayIndex = counter += 1;

                        var obj = {};
                        obj["follower_id"] = follower_id;
                        obj["user_name"] = username;
                        obj["email"] = email;
                        obj["first_name"] = first_name;
                        obj["last_name"] = last_name;
                        obj["arrayIndex"] = arrayIndex;
                        $scope.result_friends.push(obj);
                        console.log(obj);

                });

                }

                    }).
                error(function(data){
                console.log("error with followees " + data);
                    });

            $scope.removeFriend = function(followerId, itemIndex) {
                console.log("url :" + 'api/appuser/update/follower/' + $scope.Followee + "/" + followerId + "/" );
                var url = "/api/appuser/update/follower/" + $scope.Followee + "/" + followerId + "/";
                $http.delete(url).
                success(function(data){
                    console.log("Success");

                }).
                error(function(data) {
                    console.log("Failure");
                    }).
                then(function(){
                    console.log("Then exexcuted");
                    console.log("itemIndex :" + itemIndex);
                    $scope.result_friends.splice(itemIndex, 1);
                    $location.path("myfriends");  
                });
            };


  });


