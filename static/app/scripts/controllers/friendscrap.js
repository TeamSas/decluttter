/**
 * Created by skumo on 23/02/15.
 */

'use strict';

angular.module('declutterApp')
  .controller('FriendscrapCtrl', function ($scope, $http, $cookies) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;

        $http.get('/api/items/').success(function(data) {
            $scope.items = data;
        }).
            error(function(data, status, headers, config) {
            });




        //shanarae's code
        //
        //$scope.claimItem = function(){
        //    $http.put('/api/items/mine/' + item_id).
        //    success(function(data){
        //            $scope.items.put({item.claimer=user});
        //    need to update claimer with user and availability to false
        //            alert("You've claimed this item!");
        //        }).
        //    error(function(data){
        //            $scope.error = ["Error claiming item"];
        //            console.log("error" + data.error);
        //        });
        //};

    //
    //
    //$scope.addItem = function(){
    //    var data = {
    //        "item_name":$scope.formItemName,
    //        "description":$scope.formItemDescription,
    //        "category":$scope.formItemCategory
    //    };
    //
    //    $http.post('/api/items/create/', data).
    //    success(function(data){
    //            $scope.items.push({item_name:data.item_name, description:data.description, category:data.category});
    //            $scope.formItemName = '';
    //            $scope.formItemDescription = '';
    //            $scope.formItemCategory = '';
    //            $location.path('/mycrap');
    //            alert("Your new item has been posted!");
    //            }).
    //
    //        error(function(data){
    //            $scope.error = ["Error adding new item"];
    //            console.log("error" + data.error);
    //        });
    //    };
    //
    //$scope.removeItem = function(item){
    //    $http.delete('api/items/item/' + item.id).
    //    success(function(data){
    //            $scope.items.splice(
    //                $scope.items.indexOf(item),
    //                1
    //            );
    //        }).
    //        error(function(data){
    //            $scope.error = ["Error deleting item"];
    //        });
    //};


  });
