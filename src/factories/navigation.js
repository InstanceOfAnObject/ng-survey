/* navigaion rules (back/forward) */
angular.module('ngSurvey')
    .factory('navigation', [function(){
        
        // keep track of the current question
        var current = {
            group: 0,
            question: 0
        };
        
        // move to the next version
        var moveNext = function(){
            
        };
        
        // move to the previous question
        var movePrevious = function(){
            
        };
        
        return {
            moveNext: moveNext,
            movePrevious: movePrevious
        };
        
    }]);