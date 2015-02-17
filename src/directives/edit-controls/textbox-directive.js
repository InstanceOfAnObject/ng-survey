// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlTextbox', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<input id="{{question.id}}" type="text" class="form-control" ng-model="question.value" />');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });