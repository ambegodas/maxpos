angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'maxpos.account',
  'maxpos.inventory',
  'ui.router',
  'maxpos.history',
  'maxpos.settings',
  'maxpos.core.directives'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location,$http,$window ,$rootScope) {

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

      $rootScope.message ='';

      $rootScope.showMessage = function(message){
        $rootScope.message = message;
      };

      $rootScope.closeMessage = function(){
        $rootScope.message ='';
      };


        $rootScope.isNullOrEmpty = function (input){

            if(input === undefined || input ==='' || input === null){
                return true;
            } else {
                return false;
            }
        } ;
})

;

