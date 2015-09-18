angular.module('maxpos.account',['ui.router','ngResource','smart-table'])
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
        $stateProvider.state('accounts',{
            url:'/accounts',
            views:{
                'main':{
                    templateUrl:'account/account.tpl.html',
                    controller: 'AccountCtrl'
                }
            },
            data:{pateTitle:'Register'}

        });

    })
    .factory("sessionService",function($http, $window){

        var session = {};

        session.login = function(data){

            return $http.post("/maxpos/login","username=" +data.userName +"&password="+ data.password,{

                 headers:{'content-Type' : 'application/x-www-form-urlencoded'}
            }).then(function(data){
                alert("User: "+ data.userName + "Pass: " + data.password);
                localStorage.setItem("session",{});
            },function(data){
                alert("Error login");
            });

        } ;

        session.logout = function (){

            $http.post('logout', {}).success(function() {
                $window.location.href = "/maxpos/login";
            }).error(function() {
                $rootScope.authenticated = false;
            });

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

        service.userExists = function(account,success,failure){
            var Account = $resource("/maxpos/accounts");
            var data = Account.get({name:account.name}, function(){

                var accounts = data.accountsList;
                if(accounts.length !==0){
                    success(accounts[0]);
                } else {
                    failure();
                }

                success(data);
            }, failure);

        };

        service.getAccounts = function(success,failiure){
            var Account = $resource("/maxpos/accounts");
            Account.query(function(data){
                success(data);
            },function(){
                failiure();
            });
        }

        return service;
    })
    .controller('LoginCtrl', function( $scope, sessionService,accountService,$state){

        $scope.login = function(){

            accountService.userExists($scope,function(account){
                sessionService.login(account).then(function(){
                    $state.go("home");
                });

            },function(){
                alert("Error login in user");
            });
        };
    }).controller('AccountCtrl', function( $scope, sessionService, $state, accountService,$resource){

        $scope.register = function(){

            accountService.register($scope.account,

                function(returnedDate){
                    alert("Account created successfully");
                    $("#add-user-modal").modal("hide");
            },
            function(){
                alert("Error registering user");
            });
        };

        $scope.getAccounts = function(){
            accountService.getAccounts(function(data){
                $scope.accounts = data;
                alert("success");
            }, function(){
                alert("Error");
            });
        }

    })

;
