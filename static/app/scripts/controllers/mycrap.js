'use strict';

angular.module('declutterApp')

  .filter('availbool', function(){
        return function(boolValue) {
            if (boolValue === true)
                return "Claimed";
            else
                return "Available";
        };
    })

  .controller('MycrapCtrl', function ($scope, $http, $cookies, $location) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;

    $scope.itemCategories = [
        {category:'BOOKS', name:'Books'},
        {category:'ENTERTAINMENT', name:'Movies, Music, and Games'},
        {category:'ELECTRONICS', name:'Electronics and Computers'},
        {category:'HOME', name:'Home'},
        {category:'GARDEN', name:'Garden and Tools'},
        {category:'BEAUTY', name:'Beauty and Health'},
        {category:'TOYS', name:'Toys, Kids and Baby'},
        {category:'CLOTHING', name:'Clothing, Shoes and Jewelry'},
        {category:'SPORTS', name:'Sports and Outdoors'},
        {category:'AUTOMOTIVE', name:'Automotive'}
    ];

    var items_request = $http.get('/api/items/poster/');
    items_request.success(function(data){
        console.log("success" + data);
        $scope.items=data;
    });
    items_request.error(function(data){
        $scope.error = ["Error with items"];
        console.log("error" + data);
    });

    $scope.getTotalItems = function(){
        return $scope.items ? $scope.items.length : 0;
    };

    $scope.addItem = function(){
        var data = {
            "item_name":$scope.formItemName,
            "description":$scope.formItemDescription,
            "category":$scope.formItemCategory
        };

        $http.post('/api/items/create/', data).
        success(function(data){
                $scope.items.push({item_name:data.item_name, description:data.description, category:data.category});
                $scope.formItemName = '';
                $scope.formItemDescription = '';
                $scope.formItemCategory = '';
                $location.path('/mycrap');
                alert("Your new item has been posted!");
                }).

            error(function(data){
                $scope.error = ["Error adding new item"];
                console.log("error" + data.error);
            });
        };

    $scope.removeItem = function(item){
        $http.delete('api/items/item/' + item.id).
        success(function(data){
                $scope.items.splice(
                    $scope.items.indexOf(item),
                    1
                );
            }).
            error(function(data){
                $scope.error = ["Error deleting item"];
            });
    };

    $scope.delete = function(item) {
        alert("Deleting the item");
        return item.show = true;
    };

  });
