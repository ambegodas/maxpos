/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
var homeApp = angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'maxpos.account',
  'smart-table'
]);

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
homeApp.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
}) ;

homeApp.factory('saleService',function($resource){

  var service = {};

  service.loadProductData = function(productId,success,failure){
    var Product = $resource("/maxpos/products/:productId",{productId:'@productId'});
    Product.get({productId:productId},success,failure);
  };

  service.addSale = function(sale, success, failure){
       var Sale = $resource("/maxpos/sale");
        Sale.save({},sale,success,failure);
  };

  return service;

});

// To maintain the products across different statuses
homeApp.factory('unitSales', function(){
    return [];
});

homeApp.factory('sale', function(){

    var sale = {'finalTotal':0};
    return sale;
});





homeApp.controller( 'HomeCtrl', function HomeController( $scope , saleService,unitSales,sale) {


    $scope.unitSales = unitSales;
    $scope.sale = sale;

   $scope.loadProductData = function(unitSale){

     saleService.loadProductData(unitSale.product.productId, function(data){
       $scope.unitSale.product = data;
     },function(){
       alert("Error while loading product data");
     });

   };


    $scope.addUnitSale = function(unitSale){

      $scope.unitSales.push(unitSale);

        unitSale.unitTotal = unitSale.product.price * unitSale.qty;
        $scope.sale.finalTotal = $scope.sale.finalTotal + unitSale.unitTotal;
      /*
       Setting the scope.unitSale to any empty object will not update the values in the table because the newly assigned object is
       not added the collection bound to the table. This done in order to reset the input fields of the form.
       If you update the same object using scope.unitSale.product, the table will get updated.
       This is a dirty trick to reset the input fields of the form.
       */
        $scope.unitSale= {};
    };

    $scope.removeUnitSale = function(unitSale){
      var index = $scope.unitSales.indexOf(unitSale);
      if (index !== -1) {
        $scope.unitSales.splice(index, 1);
        var subTotal = unitSale.product.price * unitSale.qty;
        $scope.sale.finalTotal = $scope.sale.finalTotal - subTotal;
      }
    };

    $scope.pay = function () {
        $scope.sale.unitSales = $scope.unitSales;
        saleService.addSale($scope.sale,function(returnedData){
            alert("Payment Success");
            $scope.sale.finalTotal = 0;
            unitSales.length = 0;
        }, function(){
            alert("Payment Failed");
        });
    };

});

