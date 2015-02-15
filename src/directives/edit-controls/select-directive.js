// survey select (dropdown) control
angular.module('ngSurvey')
    .directive('surveyControlSelect', function(){
        
        return {
            restrict: 'A',
            scope: {
                field: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{field.id}}" ng-bind="field.caption"></label>');
                tmpl.push('<select ng-options="option.value as option.text for option in field.options" ng-model="field.value"></select>');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });