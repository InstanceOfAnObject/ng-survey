/*
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
    }]);