// initialize ngSurvey module
angular.module('ngSurvey', []);;/*
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
    }]);;/*
    Each region have several fields (questions).
    Each field is represented by this directive.
    It's here that we decide which edit control will be displayed.
*/

angular.module('ngSurvey')
    .directive('surveyField', ['$compile', function($compile){
        
        var getTemplate = function(type){
            var tmpl =  [];
            tmpl.push('<p>');
            
            switch (type) {
                case 'textbox':
                    tmpl.push('<div survey-control-textbox src="field"></div>');
                    break;
                case 'textarea':
                    tmpl.push('<div survey-control-textarea src="field"></div>');
                    break;
                case 'select':
                    tmpl.push('<div survey-control-select src="field"></div>');
                    break;
                default:
                    tmpl.push('<span>Unsupported field type</span>');
                    break;
            }
            
            tmpl.push('</p>');
            
            return tmpl.join('');
        };
        
        return {
            restrict: 'A',
            scope: {
                field: '=src'  
            },
            link: function(scope, elem, attrs, ctrl){
                console.log(scope.field.type);
                var el = $compile(getTemplate(scope.field.type))(scope);
                elem.replaceWith(el);
            }
        };
    }]);;/*
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