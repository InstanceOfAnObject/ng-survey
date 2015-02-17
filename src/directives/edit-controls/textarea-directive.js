// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlTextarea', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<textarea id="{{question.id}}" class="form-control" ng-model="question.value" />');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });