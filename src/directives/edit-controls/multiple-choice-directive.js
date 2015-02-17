// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlMultipleChoice', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<ul>');
                tmpl.push('  <li ng-repeat="option in question.options">');
                tmpl.push('    <label for="{{question.id}}_option{{$index}}">');
                tmpl.push('      <input ng-if="!question.singleAnswer" id="{{question.id}}_option{{$index}}" type="checkbox" name="{{question.id}}_options" ng-model="option.value" />');
                tmpl.push('      <input ng-if="question.singleAnswer" id="{{question.id}}_option{{$index}}" type="radio" name="{{question.id}}_options" ng-model="question.value" ng-value="option.value" />');
                tmpl.push('      {{option.text}}');
                tmpl.push('    </label>');
                tmpl.push(' </li>');
                tmpl.push('</ul>');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });