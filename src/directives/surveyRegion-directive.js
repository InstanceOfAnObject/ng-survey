/*
    Surveys are devided in regions.
    Each region is represented by this directive.
*/

angular.module('ngSurvey')
    .directive('surveyRegion', [function(){
        return {
            restrict: 'A',
            scope: {
                src: '='  
            },
            template: function() { 
                var tmpl =  [];
                tmpl.push('<div data-ng-repeat="field in src">');
                tmpl.push('  <div survey-field src="field"></div>');
                tmpl.push('</div>');
                
                return tmpl.join('');
            },
            link: function(scope, elem, attrs, ctrl){
                
            }
        };
    }]);