angular.module('testapp')
    .controller('Main', [function(){
        
        this.header = 'ngSurvey Test App';
        
        this.survey = {
            regions: [
                {
                    id: 'JavaScript',
                    title: 'Core JavaScript Questions',
                    group: 'javascript', // optional question group
                    fields: [
                        { id: 'region1_field1', type: 'textbox', caption: 'Question 1' },
                        { id: 'region1_field2', type: 'textarea', caption: 'Question 2' },
                        { id: 'region1_field3', type: 'select', caption: 'Question 3',
                            options: [
                                { value: 1, text: 'Yes' },
                                { value: 0, text: 'No' }
                            ]
                        }
                    ]
                },
                {
                    id: 'AngularJS',
                    title: 'AngularJS Questions',
                    group: 'angularjs', // optional question group
                    fields: [
                        { id: 'region2_field1', type: 'textbox', caption: 'Question 1' },
                        
                        /* Example of a multiple answer multiple choice question */
                        { id: 'region2_field2', type: 'multiplechoice', caption: 'Choose all that apply:',
                            options: [
                                { text: 'Option 1' },
                                { text: 'Option 2' },
                                { text: 'Option 3' }
                            ]
                        },
                        
                        /* Example of a single answer multiple choice question */
                        { id: 'region2_field3', type: 'multiplechoice', singleAnswer: true, caption: 'Choose the most correct:',
                            options: [
                                { text: 'Option 1', value: 'opt1value' },
                                { text: 'Option 2', value: 'opt2value' },
                                { text: 'Option 3', value: 'opt3value' },
                                { text: 'Option 4', value: 'opt4value' }
                            ]
                        },
                    ]
                }
            ]
        }
        
    }]);