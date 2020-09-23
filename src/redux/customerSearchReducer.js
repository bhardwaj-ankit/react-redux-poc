const initialState = {
    running: false,
    success: false,
    error: false,
    data: []
}  

const customerSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CUSTOMER': return {
      ...state,
      success : false,
      running: true,
      error: false,
      data: []
    }
    case 'SEARCH_CUSTOMER_SUCCESS':
      return {
        ...state,
        running: false,
        success : true,
        error: false,
        data: action.payload
      }
    case 'SEARCH_CUSTOMER_FAILURE':
      return {
        ...state,
        running: false,
        data: [],
        error: true
      }
    case 'CLEAR_CUSTOMER_SEARCH': 
      return {
        ...state,
        running: false,
        success: false,
        error: false,
        data: []
      }  
      

    default: return state
  }
}

export default customerSearchReducer