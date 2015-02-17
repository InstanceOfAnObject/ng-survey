/*
    Each region have several fields (questions).
    Each field is represented by this directive.
    It's here that we decide which edit control will be displayed.
*/

angular.module('ngSurvey')
    .directive('surveyQuestion', ['$compile', function($compile){
        
        var getTemplate = function(type){
            var tmpl =  [];
            tmpl.push('<p>');
            
            switch (type) {
                case 'textbox':
                    tmpl.push('<div survey-control-textbox class="form-group" src="question"></div>');
                    break;
                case 'textarea':
                    tmpl.push('<div survey-control-textarea src="question"></div>');
                    break;
                case 'select':
                    tmpl.push('<div survey-control-select src="question"></div>');
                    break;
                case 'multiplechoice':
                    tmpl.push('<div survey-control-multiple-choice src="question"></div>');
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
                question: '=src'  
            },
            link: function(scope, elem, attrs, ctrl){
                var el = $compile(getTemplate(scope.question.type))(scope);
                elem.replaceWith(el);
            }
        };
    }]);