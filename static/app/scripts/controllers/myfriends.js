'use strict';


angular.module('declutterApp')
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
        }

        

    });
