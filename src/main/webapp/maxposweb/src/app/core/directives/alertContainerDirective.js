/**
 * Created by pathmasri on 6/24/16.
 */

angular.module('maxpos.core.directives',[])
    .directive('mpAlertContainer',function(){
        return {
            restrict:'E',
            templateUrl : 'alertTemplate.html',
            replace:true
        } ;
    });