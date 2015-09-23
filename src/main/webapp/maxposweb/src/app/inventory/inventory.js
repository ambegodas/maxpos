var app = angular.module('maxpos.inventory',[
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'smart-table'
]) ;

app.config(function config($stateProvider){

    $stateProvider.state('inventory',{
     url: '/inventory',
        views: {
            "main":{
                controller: 'InventoryCtrl',
                templateUrl: 'inventory/inventory.tpl.html'
            }
        },
        data:{ pageTitle: 'Inventory' }

    });
});

app.factory('inventoryService', function($resource){

     var service = {};

     service.addProduct = function(product, success, failure){
         var Product = $resource("/maxpos/products");
         Product.save({},product,success,failure);
     };

    service.getProducts = function(success,failure){
        var Product = $resource("/maxpos/products");
        Product.query({},success,failure);
    } ;

    service.updateProduct = function(product,success,failure){

        var Product = $resource("/maxpos/product",null,{'update': { method:'PUT' }});
        Product.update(product,success,failure);

    };
     return service;
});

app.controller('InventoryCtrl',function($scope,inventoryService){

    $scope.addProduct = function(){
        inventoryService.addProduct($scope.product,

            function(returnedDate){
                alert("Product added successfully");
                $("#add-product-modal").modal("hide");
            },
            function(){
                alert("Add product failed");
            });
    };

    $scope.getProducts = function () {
        inventoryService.getProducts(function(data){
            $scope.products = data;
        }, function(){
            alert("Error while retrieving products");
        });
    };

    $scope.updateProduct = function(){
        inventoryService.updateProduct($scope.product,function(){
            alert("Product added successfully");
            $("#update-product-modal").modal("hide");
        },function(){
            alert("Update product failed");
        });
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };

    $scope.openUpdateProductModal = function(product){
        $scope.product = product;
    };

});