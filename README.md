# ng-survey
An AngularJS based survey engine.


## configuration

    {
      regions: [
        {
          id: 'region1',
          title: 'Region 1',
          fields: [
            { id: 'region1_field1', type: 'textbox', mandatory: true, validation: 'integer|decimal|regex|function' },
            { id: 'region1_field1', type: 'checkbox' },
            { id: 'region1_field2', type: 'select', options: [ { value: '', text: '' } | function ] },  // support ajax to get options
            { id: 'region1_field2', type: 'multiple_choice', allowMultiple: true, options: [ { value: '', text: '' } | function ] }, // support ajax to get options
          ],
          actions: [
            { condition: '', action: '' } // ex: evaluate fields and show/hide regions.
          ]
        }
      ]
    }