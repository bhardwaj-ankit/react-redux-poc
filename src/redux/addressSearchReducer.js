const initialState = {
    // running: false,
    // success: false,
    error: false,
    data: []
}  

const addressSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ADDRESS': return {
      ...state,
    //   success : false,
    //   running: true,
      error: false,
      data: []
    }
    case 'SEARCH_ADDRESS_SUCCESS':
      return {
        ...state,
        // running: false,
        // success : true,
        error: false,
        data: action.payload
      }
    case 'SEARCH_ADDRESS_FAILURE':
      return {
        ...state,
        // running: false,
        data: [],
        error: action.payload
      }
    case 'CLEAR_ADDRESS_SEARCH': 
      return {
        ...state,
        // running: false,
        // success: false,
        error: false,
        data: []
      }  
      

    default: return state
  }
}

export default addressSearchReducer