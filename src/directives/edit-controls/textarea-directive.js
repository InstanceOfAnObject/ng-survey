// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlTextarea', function(){
        
        return {
            restrict: 'A',
            scope: {
                field: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{field.id}}" ng-bind="field.caption"></label>');
                tmpl.push('<textarea id="field.id" ng-model="field.value" />');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });