/*
    Surveys are devided in regions.
    Each region is represented by this directive.
*/

angular.module('ngSurvey')
    .directive('surveyGroup', [function(){
        return {
            restrict: 'A',
            scope: {
                questions: '=src',
                qidx: '='
            },
            template: function() { 
                var tmpl =  [];
                tmpl.push('<div data-ng-repeat="question in questions" ng-show="$index == qidx">');
                tmpl.push('  <div survey-question src="question"></div>');
                tmpl.push('</div>');
                
                return tmpl.join('');
            },
            link: function(scope, elem, attrs, ctrl){
                
            }
        };
    }]);