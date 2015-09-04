angular.module('ngBoilerplate.account',['ui.router','ngResource'])
    .config(function($stateProvider){
        $stateProvider.state('login',{
            url:'/login',
            views:{
                'main':{
                    templateUrl:'account/login.tpl.html',
                    controller: 'LoginCtrl'
                }
            },
            data:{pateTitle:'Login'}

        });

    })
    .config(function($stateProvider){
        $stateProvider.state('register',{
            url:'/register',
            views:{
                'main':{
                    templateUrl:'account/register.tpl.html',
                    controller: 'RegisterCtrl'
                }
            },
            data:{pateTitle:'Register'}

        });

    })
    .factory("sessionService",function(){

        var session = {};
        session.login = function(data){
            alert("User: "+ data.userName + "Pass: " + data.password);
            localStorage.setItem("session",data);
        } ;

        session.logout = function (data){
            localStorage.removeItem("session",data);
        };

        session.isLoggedIn = function(){ return localStorage.getItem("session") != null ;} ;

        return session;

    })
    .factory("accountService", function($resource){

        var service = {};
        service.register = function(account, success, failure){

            var Account = $resource("/maxpos/accounts");
            Account.save({},account,success,failure);

        } ;

        return service;

    })
    .controller('LoginCtrl', function( $scope, sessionService, $state){

        $scope.login = function(){

            sessionService.login($scope.account);
            $state.go("home");

            //alert("User: "+ $scope.account.username + "Pass: " + $scope.account.password);
        };
    }).controller('RegisterCtrl', function( $scope, sessionService, $state, accountService){

        $scope.register = function(){

            accountService.register($scope.account,
                function(returnedDate){
                    sessionService.login(returnedDate);
                    $state.go("home");
            },
            function(){
                alert("Error registering user");
            });


            sessionService.login($scope.account);
            $state.go("home");

            //alert("User: "+ $scope.account.username + "Pass: " + $scope.account.password);
        };
    })

;
