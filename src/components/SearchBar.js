import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input'
import { searchCustomer, clearCustomerSearch } from '../redux/customerSearchActions'
import SearchFilter from './SearchFilter'
import { useSelector, useDispatch } from 'react-redux'

const SearchBar = () => {
    const data = useSelector(state => state.customer)
    const dispatch = useDispatch()

    const searchCust = (val) => {
        dispatch(searchCustomer())
    };

    const clearSearch = () => {

        dispatch(clearCustomerSearch())
    };

    return (
        <>
            <Input></Input>
            <div>Search Status : {data.data.length}</div>
            <button onClick={searchCust}>Search</button>
            <button onClick={clearSearch}>Clear</button>
            <SearchFilter call={() => searchCust()}></SearchFilter>
        </>
    )

}

// const mapStateToProps = state => {
//     return {
//         userData: state.data
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         searchCustomer: () => dispatch(searchCustomer()),
//         clearCustomerSearch: () => dispatch(clearCustomerSearch())
//     }
// }

export default SearchBar;