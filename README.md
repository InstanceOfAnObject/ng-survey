# ng-survey
An AngularJS based survey engine.

## Objectives
Create a module for AngularJS that can generate and manage Surveys and Tests.
The main difference between the two is that a Tests expect a correct answer and Surveys just collect information.

## Functionality
- Manage a set of questions
- Support several types of answer
  - Textbox
  - TextArea
  - Dropdown
  - Multiple-Choice
- Answer input validation
  - Numeric
  - Date
- Test result grade
  - Specify full test maximum grade (default 100%)
  - Specify each question grade (default equaly devide)
- Show questions in order or random appearence
- Create from pool of questions
  - Be able to generate a Test from a pool of questions
- Support reply once
 - Only allow the user to see the question once
 - Only allow the user to enter que Test once
- Limit the allowed number of answers
  - Useful to generate tests for a specific person
- Optional answer time limit
- Optional overall time limit
- Support question syntax highlighting
- Secure and obfuscate Survey/Test
  - Generate URL with hash
  - Allow username/password to enter
  - SSO integration with Facebook/Linkedin/GitHub (keep it at app level?) 
- Allow linking between questions and regions
  - Support action based on answer (i.e.: show/hide other questions)

## configuration

    {
      regions: [
        {
          id: 'JavaScript',
          title: 'Core JavaScript Questions',
          group: 'javascript', // optional question group
          fields: [
            { id: 'region1_field1', type: 'textbox', mandatory: true, validation: 'integer|decimal|regex|function' },
            { id: 'region1_field2', type: 'checkbox' },
            { id: 'region1_field3', type: 'select', options: [ { value: '', text: '' } | function ] },  // support ajax to get options
            { id: 'region1_field4', type: 'multiple_choice', allowMultiple: true, options: [ { value: '', text: '' } | function ] }, // support ajax to get options
          ],
          actions: [
            { condition: '', action: '' } // ex: evaluate fields and show/hide regions.
          ]
        }
      ]
    }