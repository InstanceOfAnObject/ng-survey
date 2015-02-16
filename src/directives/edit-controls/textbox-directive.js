// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlTextbox', function(){
        
        return {
            restrict: 'A',
            scope: {
                field: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{field.id}}" ng-bind="field.caption"></label>');
                tmpl.push('<input id="{{field.id}}" type="text" class="form-control" ng-model="field.value" />');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });