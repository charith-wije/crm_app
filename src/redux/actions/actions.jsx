export const updateStatusValueInCustomer = value => ({
  type: 'UPDATE_CUSTOMER_STATUS',
  payload: {
    value,
  },
});
export const addCustomerOpportunity = (
  selectedValue,
  opportunityName,
  outerIndexxxx,
) => ({
  type: 'ADD_CUSTOMER_OPPORTUNITY',
  payload: {
    selectedValue,
    opportunityName,
    outerIndexxxx,
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
export const deleteCustomerOpportunity = (outerIndexx, innerIndexx) => ({
  type: 'DELETE_CUSTOMER_OPPORTUNITY',
  payload: {
    outerIndexx,
    innerIndexx,
  },
});
