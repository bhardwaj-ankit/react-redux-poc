import axios from 'axios'

export const searchAddress = () => {
  return (dispatch) => {
    dispatch(searchAddressRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const rand = Math.floor(Math.random() * 100)
        console.log('random number : ' + rand)
        const data = res.data[rand]
        console.log('Data  ' + data)
        dispatch(searchAddressSuccess(data))
      })
      .catch(error => {
       dispatch(searchAddressFailure(error.message))
      })
  }
}

export const searchAddressRequest = () => {
  return {
    type: 'SEARCH_ADDRESS'
  }
}

export const clearAddressSearch = () => {
  return {
    type: 'CLEAR_ADDRESS_SEARCH'
  }
}

export const searchAddressSuccess = users => {
  return {
    type: 'SEARCH_ADDRESS_SUCCESS',
    payload: users
  }
}

export const searchAddressFailure = error => {
  return {
    type: 'SEARCH_ADDRESS_FAILURE',
    payload: error
  }

}