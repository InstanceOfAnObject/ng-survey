

// initialize ngSurvey module
angular.module('ngSurvey', []);;;;;

// survey textbox control
angular.module('ngSurvey')
    .directive('surveyTextbox', function(){
        
        return {
            restrict: 'A',
            template: '<input type="text" />',
            link: function($scope, element, attrs, controllers){
                
            }
        }
        
    });