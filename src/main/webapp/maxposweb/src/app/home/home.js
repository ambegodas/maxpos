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

  return service;

});

/**
 * And of course we define a controller for our route.
 */
homeApp.controller( 'HomeCtrl', function HomeController( $scope , saleService) {

   $scope.loadProductData = function(proudctID){

     saleService.loadProductData(proudctID, function(data){
       $scope.product = data;
     },function(){
       alert("Error while loading product data");
     });

   };

    $scope.products = [];

    $scope.addProduct = function(){
      $scope.products.push($scope.product);
    };

    $scope.removeProduct = function(product){
      var index = $scope.products.indexOf(product);
      if (index !== -1) {
        $scope.products.splice(index, 1);
      }
    }

});

