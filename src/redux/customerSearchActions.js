import axios from 'axios'

export const searchCustomer = () => {
  return (dispatch) => {
    // dispatch(searchCustomerRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const rand = Math.floor(Math.random() * 100)
        // console.log('random number : ' + rand)
        const data = res.data[rand]
        // console.log('Data  ' + data)
        dispatch(searchCustomerSuccess(data))
      })
      .catch(error => {
       dispatch(searchCustomerFailure(error.message))
      })
  }
}

// export const searchCustomerRequest = () => {
//   return {
//     type: 'SEARCH_CUSTOMER'
//   }
// }

export const clearCustomerSearch = () => {
  return {
    type: 'CLEAR_CUSTOMER_SEARCH'
  }
}

export const searchCustomerSuccess = users => {
  return {
    type: 'SEARCH_CUSTOMER_SUCCESS',
    payload: users
  }
}

export const searchCustomerFailure = error => {
  return {
    type: 'SEARCH_CUSTOMER_FAILURE',
    payload: error
  }

}