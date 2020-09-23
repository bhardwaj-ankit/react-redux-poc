import { combineReducers } from 'redux'
import addressSearchReducer from './addressSearchReducer'
import customerSearchReducer from './customerSearchReducer'

const rootReducer = combineReducers({
  address: addressSearchReducer,
  customer: customerSearchReducer
})

export default rootReducer