const initialState = {
  data: [
    {
      id: 'ID284939',
      name: 'Dillon Baer',
      status: 'Active',
      email: 'dillonbaer@detaildriveby.com',
      contact_number: '+94712347896',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'Closed Won',
        },
      ],
    },
    {
      id: 'ID874028',
      name: 'Shine Smith',
      status: 'Inactive',
      email: 'shinedetailingohio@gmail.com',
      contact_number: '+61715896093',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'Closed Lost',
        },
      ],
    },
    {
      id: 'ID184309',
      name: 'Joshua Limm',
      status: 'Lead',
      email: 'joshuarowe2017@gmail.com',
      contact_number: '0714829054',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'New',
        },
      ],
    },
    {
      id: 'ID184630',
      name: 'Bell Hardy',
      status: 'Lead',
      email: 'belmont@watchtv.net',
      contact_number: '0714829054',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'New',
        },
      ],
    },
    {
      id: 'ID184642',
      name: 'Cristy Rom',
      status: 'Lead',
      email: 'unwind@crystalcreekpostofcecottages.com',
      contact_number: '+544829054',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'New',
        },
      ],
    },
    {
      id: 'ID364642',
      name: 'Tim David',
      status: 'Lead',
      email: 'parts@armysauto.com',
      contact_number: '0714829054',
      opportunities: [
        {
          id: 1,
          name: 'Cleaning',
          status: 'New',
        },
        {
          id: 2,
          name: 'Marketing',
          status: 'New',
        },
      ],
    },

    // Add more items as needed
  ],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CUSTOMER_OPPORTUNITY':
      const {selectedValuee, opportunityNamee, outerIndexxxxx, innerIndexxxxx} =
        action.payload;
      const updatedData = [...state.data];

      const updatedInnerArrrayy = updatedData[outerIndexxxxx].opportunities;
      updatedInnerArrrayy[innerIndexxxxx].name = opportunityNamee;
      updatedInnerArrrayy[innerIndexxxxx].status = selectedValuee;

      return {
        ...state,
        data: updatedData,
      };
    case 'ADD_CUSTOMER_OPPORTUNITY':
      const {selectedValue, opportunityName, outerIndexxxx} = action.payload;
      console.log(selectedValue, opportunityName, outerIndexxxx, 'rrrrrr');
      const updatedDataa = [...state.data];
      const updatedInnerArrray = updatedDataa[outerIndexxxx].opportunities;
      updatedInnerArrray.push({
        id: Math.floor(Math.random() * 90000) + 10000,
        name: opportunityName,
        status: selectedValue,
      });
      updatedDataa[outerIndexxxx].opportunities = updatedInnerArrray;

      return {
        ...state,
        data: updatedDataa,
      };
    case 'DELETE_CUSTOMER_OPPORTUNITY':
      const {outerIndexx, innerIndexx} = action.payload;
      const updatedDataaaa = [...state.data];
      const updatedInnerArray = updatedDataaaa[outerIndexx].opportunities;
      updatedInnerArray.splice(innerIndexx, 1);
      updatedDataaaa[outerIndexx].opportunities = updatedInnerArray;

      return {
        ...state,
        data: updatedDataaaa,
      };
    case 'UPDATE_CUSTOMER_STATUS':
      const {outerIndexxxxxxx, selectedValueeeeeee} = action.payload;
      const updatedDataaa = [...state.data];
      updatedDataaa[outerIndexxxxxxx].status = selectedValueeeeeee;

      return {
        ...state,
        data: updatedDataaa,
      };
    default:
      return state;
  }
};

export default mainReducer;
