const initialState = {
  data: [
    {
      id: 'ID284939',
      name: 'Charith Wijenayake',
      status: 'Active',
      email: 'jdurbf@gmail.com',
      contact_number: '0712347896',
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
      name: 'Madhushi Paranagama',
      status: 'Inactive',
      email: 'kghtkfh@gmail.com',
      contact_number: '0715896093',
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
      name: 'Soma Abeywickama',
      status: 'Lead',
      email: 'hajakrn@gmail.com',
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
      const {outerIndex, innerIndex, updatedInfo} = action.payload;
      const updatedData = [...state.data];
      // const updatedInnerArray = [...updatedData[outerIndex].opportunities];
      // updatedInnerArray.splice(innerIndex, 1);
      // updatedData[outerIndex].opportunities = updatedInnerArray;

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
        id: updatedInnerArrray.length + 1,
        name: opportunityName,
        status: selectedValue,
      });
      updatedDataa[outerIndexxxx].opportunities = updatedInnerArrray;

      return {
        ...state,
        data: updatedDataa,
      };
    case 'DELETE_CUSTOMER_OPPORTUNITY':
      //console.log('rrrrrr');
      const {outerIndexx, innerIndexx} = action.payload;
      //console.log(outerIndexx, innerIndexx, 'pop');
      const updatedDataaaa = [...state.data];
      //console.log(updatedDataaaa[outerIndexx].opportunities, 'pop');
      const updatedInnerArray = updatedDataaaa[outerIndexx].opportunities;
      updatedInnerArray.splice(innerIndexx, 1);
      updatedDataaaa[outerIndexx].opportunities = updatedInnerArray;

      return {
        ...state,
        data: updatedDataaaa,
      };
    case 'UPDATE_CUSTOMER_STATUS':
      const {index, statusValue} = action.payload;
      const updatedDataaa = [...state.data];
      updatedDataaa[index].status = statusValue;

      return {
        ...state,
        data: updatedDataaa,
      };
    default:
      return state;
  }
};

export default mainReducer;
