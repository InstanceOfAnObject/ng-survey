// survey select (dropdown) control
angular.module('ngSurvey')
    .directive('surveyControlSelect', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<select id="{{question.id}}" class="form-control" ng-options="option.value as option.text for option in question.options" ng-model="question.value"></select>');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });