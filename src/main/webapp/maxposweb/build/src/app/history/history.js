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

historyApp.controller('HistoryCtrl',function($scope){



});