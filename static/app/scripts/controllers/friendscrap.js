/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
    .config(function($httpProvider , $interpolateProvider, $resourceProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //** django urls loves trailling slashes which angularjs removes by default.
    $resourceProvider.defaults.stripTrailingSlashes = false;
    })
  .controller('FriendscrapCtrl', function ($scope, $http, $cookies) {

        $scope.claim = function(itemId){
            var url = "/api/items/update/" + itemId + "/";
            var claimUpdate = {"availability": false, "claimer": $scope.poster_items['data'][0]["poster"]["id"]};
            $http.patch(url, claimUpdate).success(function(data){
                console.log("Success");
                console.log("poster_id :" + $scope.poster_items['data'][0]["poster"]["id"]);
            }).
            error(function(data){
                console.log("Failure");
            });
        };

    });

