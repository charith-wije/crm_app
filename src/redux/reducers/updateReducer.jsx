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
          name: 'Cleaning',
          status: 'New',
        },
        {
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
          name: 'Cleaning',
          status: 'New',
        },
        {
          name: 'Marketing',
          status: 'Closed Won',
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
          name: 'Cleaning',
          status: 'New',
        },
        {
          name: 'Marketing',
          status: 'Closed Won',
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
      const updatedInnerArray = [...updatedData[outerIndex]];
      updatedInnerArray[innerIndex] = updatedInfo;
      updatedData[outerIndex] = updatedInnerArray;
      return {
        ...state,
        data: updatedData,
      };
    case 'ADD_CUSTOMER_OPPORTUNITY':
      const {value} = action.payload;
      const updatedDataa = state.data.map(innerArray => [...innerArray, value]);

      return {
        ...state,
        data: updatedDataa,
      };
    case 'DELETE_CUSTOMER_OPPORTUNITY':
      const {outerIndexx, innerIndexx} = action.payload;
      const updatedDataaaa = state.data.map((innerArray, index) => {
        if (index === outerIndexx) {
          return innerArray.filter((_, idx) => idx !== innerIndexx);
        }
        return innerArray;
      });

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
