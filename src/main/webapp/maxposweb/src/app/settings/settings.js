/**
 * Created by pathmasri on 12/16/15.
 */

var app = angular.module('maxpos.settings',['ui.router']);

app.config(function($stateProvider){

    $stateProvider.state('settings',{
        url: '/settings',
        views: {
            "main":{
                controller: 'SettingsCtrl',
                templateUrl: 'settings/settings.tpl.html'
            }
        },
        data:{ pageTitle: 'Settings'}

    });
});

app.controller('SettingsCtrl',function($scope){

});
