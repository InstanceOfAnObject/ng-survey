/*
    The main survey directive, everything else is generated inside this element.
*/
angular.module('ngSurvey')
    .directive('survey', [function(){
        return {
            restrict: 'EA',
            scope: {
                src: '='  
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<ul>');
                tmpl.push('  <li data-ng-repeat="region in src.regions">');
                tmpl.push('    <h2>{{region.title}}</h2>');
                tmpl.push('    <div survey-region src="region.fields"></div>');
                tmpl.push('  </li>');
                tmpl.push('</ul>');
                
                return tmpl.join('');
            },
            link: function(scope, elem, attrs, ctrl){
                
            }
        };
    }]);