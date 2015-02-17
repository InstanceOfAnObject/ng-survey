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