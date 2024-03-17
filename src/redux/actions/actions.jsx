export const updateStatusValueInCustomer = value => ({
  type: 'UPDATE_CUSTOMER_STATUS',
  payload: {
    value,
  },
});
export const addCustomerOpportunity = value => ({
  type: 'ADD_CUSTOMER_OPPORTUNITY',
  payload: {
    value,
  },
});
export const updateCustomerOpportunity = (outerIndex, innerIndex, value) => ({
  type: 'UPDATE_CUSTOMER_OPPORTUNITY',
  payload: {
    outerIndex,
    innerIndex,
    value,
  },
});
export const deleteCustomerOpportunity = (outerIndex, innerIndex, value) => ({
  type: 'DELETE_CUSTOMER_OPPORTUNITY',
  payload: {
    outerIndex,
    innerIndex,
    value,
  },
});
