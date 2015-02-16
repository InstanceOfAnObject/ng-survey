// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlMultipleChoice', function(){
        
        return {
            restrict: 'A',
            scope: {
                field: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{field.id}}" ng-bind="field.caption"></label>');
                tmpl.push('<ul>');
                tmpl.push('  <li ng-repeat="option in field.options">');
                tmpl.push('    <label for="{{field.id}}_option{{$index}}">');
                tmpl.push('      <input ng-if="!field.singleAnswer" id="{{field.id}}_option{{$index}}" type="checkbox" name="{{field.id}}_options" ng-model="option.value" />');
                tmpl.push('      <input ng-if="field.singleAnswer" id="{{field.id}}_option{{$index}}" type="radio" name="{{field.id}}_options" ng-model="field.value" ng-value="option.value" />');
                tmpl.push('      {{option.text}}');
                tmpl.push('    </label>')
                tmpl.push(' </li>');
                tmpl.push('</ul>');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });