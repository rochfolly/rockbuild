export const initialUserData = {

  ////// CRITERIAS //////
  criterias: {
    '001': {
        criteria_id: '001',
        criteria_name: 'awakening',
        type: 'check',
        percentage: 0,
        description: ""
    },
    '002': {
        criteria_id: '002',
        criteria_name: 'productivity',
        type: 'rating',
        average: 0,
        description: ""
    },
    '003': {
        criteria_id: '003',
        criteria_name: 'focus',
        type: 'rating',
        average: 0,
        description: ""
    },
    '004': {
        criteria_id: '004',
        criteria_name: 'phone usage',
        type: 'rating',
        average: 0,
        description: ""
    },
    '005': {
        criteria_id: '005',
        percentage: 'bedding',
        type: 'check',
        average: 0,
        description: ""
    },
    '006': {
      criteria_id: '006',
      criteria_name: 'laziness',
      type: 'rating',
      average: 0,
      description: ""
    },
    '007': {
      criteria_id: '007',
      criteria_name: 'diet',
      type: 'rating',
      average: 0,
      description: ""
    },
    '008': {
      criteria_id: '008',
      criteria_name: 'dopamine control',
      type: 'rating',
      average: 0,
      description: ""
    }
  },

  /////// EVENTS ///////
  events: {
    '001': {
      event_id: '001',
      event_name: 'Work Day',
      data: [],
      criterias: [
        {
          criteria_id: '001',
          criteria_name: 'awakening',
          average: null,
          count: 0 
        },
        {
          criteria_id: '002',
          criteria_name: 'productivity',
          average: null,
          count: 0 
        },
        {
          criteria_id: '003',
          criteria_name: 'focus',
          average: null,
          count: 0 
        },
        {
          criteria_id: '004',
          criteria_name: 'Phone usage',
          average: null,
          count: 0 
        },
        {
          criteria_id: '005',
          criteria_name: 'bedding',
          average: null,
          count: 0 
        },
      ],
      average: 0,
      description: ""
    },
    '002': {
      event_id: '002',
      event_name: 'Rest Day',
      data: [],
      criterias: [
        {
          criteria_id: '003',
          criteria_name: 'focus',
          average: null,
          count: 0 
        },
        {
          criteria_id: '006',
          criteria_name: 'laziness',
          average: null,
          count: 0 
        },
      ],
      average: 0,
      description: ""
    },
  },

  ////// SETTINGS //////
  settings: {
    ratedPeriodicity: "day",
    weekConfiguration: {
      work: [1, 2, 3, 4, 5],
      rest: [0, 6]
    },
    debtMode: true,
    debt: {
      cumulated: 0,
      current: 0,
      scale: [0.1, 0.5]
    }
  },

  rated: {

  }
  
}
