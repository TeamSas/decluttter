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
        //  Step 1:  Get all the data from Item List API
        $scope.poster_items = {};
        $http.get('/api/items/').
        success(function(data){
            $scope.poster_items['data'] = data;
            console.log("data type: " + data[0]["id"]);
            console.log("data length: " + data.length);
            console.log("scope: " + $scope.poster_items['data'][0]["id"]);
            console.log("scope.length :" + $scope.poster_items['data'].length);
        }).
        error(function(data){
            console.log("error " + data);
        });

        $scope.itemDetailCollection = [];
        
        $scope.itemPop = function (){
            for (var i=0; i<$scope.poster_items['data'].length; i ++){
                var itemID = $scope.poster_items['data'][i]["id"];
                var posterID = $scope.poster_items['data'][i]["poster"]["id"];
                var itemName = $scope.poster_items['data'][i]["item_name"];
                var avail = $scope.poster_items['data'][i]["availability"];
                var category = $scope.poster_items['data'][i]["category"];

                var itemObject = {};
                itemObject['item_id'] = itemID;
                itemObject['poster_id'] = posterID;
                itemObject['item_name'] = itemName;
                itemObject['availability'] = avail;
                itemObject['category'] = category;
                $scope.itemDetailCollection.push(itemObject);
            }
        };

        // $scope.itemPop();

        // console.log("itemCollection : " + $scope.itemDetailCollection);

        $scope.claim = function(itemId){
            var url = "/api/items/update/" + itemId + "/";
            var claimUpdate = {"availability": false, "claimer": $scope.poster_items['data'][0]["poster"["id"]};
            $http.patch(url, claimUpdate).success(function(data){
                console.log("Success");
                console.log("poster_id :" + $scope.poster_items['data'][0]["poster"["id"]);
            }).
            error(function(data){
                console.log("Failure");
            });
        };

    });

