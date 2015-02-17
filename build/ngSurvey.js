// initialize ngSurvey module
angular.module('ngSurvey', []);

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

// survey select (dropdown) control
angular.module('ngSurvey')
    .directive('surveyControlSelect', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<select id="{{question.id}}" class="form-control" ng-options="option.value as option.text for option in question.options" ng-model="question.value"></select>');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });

// survey textbox control
angular.module('ngSurvey')
    .directive('surveyControlTextarea', function(){
        
        return {
            restrict: 'A',
            scope: {
                question: '=src'
            },
            template: function() { 
                var tmpl = [];
                tmpl.push('<label for="{{question.id}}" ng-bind="question.caption"></label>');
                tmpl.push('<textarea id="{{question.id}}" class="form-control" ng-model="question.value" />');
                
                return tmpl.join('');
            },
            link: function($scope, element, attrs, controllers){
                
            }
        };
        
    });

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
                tmpl.push('  <li ng-show="$index === activeGroupIdx" data-ng-repeat="group in src.groups">');
                tmpl.push('    <h2>{{group.title}}</h2>');
                tmpl.push('    <div survey-group src="group.questions" qidx="activeQuestionIdx"></div>');
                tmpl.push('  </li>');
                tmpl.push('</ul>');
                tmpl.push('<p>');
                tmpl.push('  <input type="button" class="btn btn-secondary" ng-click="onGoToPreviousQuestion()" value="Previous" ng-hide="(activeGroupIdx + activeQuestionIdx) === 0" />');
                tmpl.push('  <input type="button" class="btn btn-primary" ng-click="onGotToNextQuestion()" value="Next" ng-hide="finish" />');
                tmpl.push('  <input type="button" class="btn btn-primary" ng-click="onFinish()" value="Finish" ng-show="finish" />');
                tmpl.push('</p>');
                
                return tmpl.join('');
            },
            link: function(scope, elem, attrs, ctrl){
                scope.activeGroupIdx = 0;
                scope.activeQuestionIdx = 0;
                scope.finish = false;
                
                scope.onGotToNextQuestion = function(){
                    var isLastQuestion = false,
                        isLastGroup = false;
                        
                    // evaluate indexes
                    isLastQuestion = (scope.activeQuestionIdx+1) === scope.src.groups[scope.activeGroupIdx].questions.length;
                    isLastGroup = (scope.activeGroupIdx+1) === scope.src.groups.length;
                    
                    if (!isLastQuestion){
                        scope.activeQuestionIdx++;
                    } else if (isLastQuestion && !isLastGroup){
                        scope.activeGroupIdx++;
                        scope.activeQuestionIdx = 0;
                    }
                    
                    // reevaluate indexes
                    isLastQuestion = (scope.activeQuestionIdx+1) === scope.src.groups[scope.activeGroupIdx].questions.length;
                    isLastGroup = (scope.activeGroupIdx+1) === scope.src.groups.length;
                    
                    if(isLastQuestion && isLastGroup){
                        scope.finish = true;
                    }
                };
                
                scope.onGoToPreviousQuestion = function(){
                    if(scope.activeQuestionIdx > 0){
                        scope.activeQuestionIdx--;
                        scope.finish = false;
                    } else if(scope.activeQuestionIdx === 0 && scope.activeGroupIdx > 0){
                        scope.activeGroupIdx--;
                        scope.activeQuestionIdx = scope.src.groups[scope.activeGroupIdx].questions.length - 1;
                        scope.finish = false;
                    }
                };
                
                scope.onFinish = function(){
                    
                };
                
            }
        };
    }]);

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