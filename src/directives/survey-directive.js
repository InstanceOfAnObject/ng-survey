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
                tmpl.push('  <li ng-show="$index === activeRegionIdx" data-ng-repeat="region in src.regions">');
                tmpl.push('    <h2>{{region.title}}</h2>');
                tmpl.push('    <div survey-region src="region.fields" qidx="activeQuestionIdx"></div>');
                tmpl.push('  </li>');
                tmpl.push('</ul>');
                tmpl.push('<p>');
                tmpl.push('  <input type="button" class="btn btn-secondary" ng-click="onGoToPreviousQuestion()" value="Previous" ng-hide="(activeRegionIdx + activeQuestionIdx) === 0" />');
                tmpl.push('  <input type="button" class="btn btn-primary" ng-click="onGotToNextQuestion()" value="Next" ng-hide="finish" />');
                tmpl.push('  <input type="button" class="btn btn-primary" ng-click="onFinish()" value="Finish" ng-show="finish" />');
                tmpl.push('</p>');
                
                return tmpl.join('');
            },
            link: function(scope, elem, attrs, ctrl){
                scope.activeRegionIdx = 0;
                scope.activeQuestionIdx = 0;
                scope.finish = false;
                
                console.log('init');
                
                scope.onGotToNextQuestion = function(){
                    console.log('next');
                    var isLastQuestion = false,
                        isLastRegion = false;
                        
                    // evaluate indexes
                    isLastQuestion = (scope.activeQuestionIdx+1) === scope.src.regions[scope.activeRegionIdx].fields.length;
                    isLastRegion = (scope.activeRegionIdx+1) === scope.src.regions.length;
                    
                    if (!isLastQuestion){
                        scope.activeQuestionIdx++;
                    } else if (isLastQuestion && !isLastRegion){
                        scope.activeRegionIdx++;
                        scope.activeQuestionIdx = 0;
                    }
                    
                    // reevaluate indexes
                    isLastQuestion = (scope.activeQuestionIdx+1) === scope.src.regions[scope.activeRegionIdx].fields.length;
                    isLastRegion = (scope.activeRegionIdx+1) === scope.src.regions.length;
                    
                    if(isLastQuestion && isLastRegion){
                        scope.finish = true;
                    }
                }
                
                scope.onGoToPreviousQuestion = function(){
                    console.log('prev');
                    if(scope.activeQuestionIdx > 0){
                        scope.activeQuestionIdx--;
                        scope.finish = false;
                    } else if(scope.activeQuestionIdx === 0 && scope.activeRegionIdx > 0){
                        scope.activeRegionIdx--;
                        scope.activeQuestionIdx = scope.src.regions[scope.activeRegionIdx].fields.length - 1;
                        scope.finish = false;
                    }
                };
                
                scope.onFinish = function(){
                    
                };
                
            }
        };
    }]);