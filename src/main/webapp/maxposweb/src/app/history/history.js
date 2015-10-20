var historyApp = angular.module('maxpos.history',['ui.router']);

historyApp.config(function ($stateProvider) {

    $stateProvider.state('history',{
        'url':'/history',
         'views':{
             'main':{
                 controller: 'HistoryCtrl',
                 templateUrl: 'history/history.tpl.html'
             }
         },
         'data':{'pageTitle':'History'}
    });

});

historyApp.factory('historyService',function($resource){

    var historyService = {};

      historyService.loadHistory = function(success, failure){

          var History = $resource("/maxpos/transactionAudits");
          History.get({},success,failure);

      };

    return historyService;

});


historyApp.controller('HistoryCtrl',function($scope,historyService){

    var loadHistory = function (){

        historyService.loadHistory(function (returnedData) {
            $scope.transactions = returnedData.transactionAuditList;
        }, function(){
            alert("Error Loading History");
        });
    };
    loadHistory();

});