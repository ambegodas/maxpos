angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'maxpos.account',
  'maxpos.inventory',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location,$http,$window ) {

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | MaxPos' ;
    }
  });

      $scope.logout = function(){

        $http.post('logout', {}).success(function() {
          $window.location.href = "/maxpos/login";
        }).error(function() {
          $rootScope.authenticated = false;
        });

      } ;
})

;

