export const updateStatusValueInCustomer = (
  selectedValueeeeeee,
  outerIndexxxxxxx,
) => ({
  type: 'UPDATE_CUSTOMER_STATUS',
  payload: {
    selectedValueeeeeee,
    outerIndexxxxxxx,
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
export const updateCustomerOpportunity = (
  selectedValuee,
  opportunityNamee,
  outerIndexxxxx,
  innerIndexxxxx,
) => ({
  type: 'UPDATE_CUSTOMER_OPPORTUNITY',
  payload: {
    selectedValuee,
    opportunityNamee,
    outerIndexxxxx,
    innerIndexxxxx,
  },
});
export const deleteCustomerOpportunity = (outerIndexx, innerIndexx) => ({
  type: 'DELETE_CUSTOMER_OPPORTUNITY',
  payload: {
    outerIndexx,
    innerIndexx,
  },
});
