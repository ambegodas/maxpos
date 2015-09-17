var app = angular.module('maxpos.inventory',[
    'ui.router',
    'placeholders',
    'ui.bootstrap'
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

app.controller('InventoryCtrl',function($scope){


});