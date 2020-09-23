import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input'
import { searchCustomer, clearCustomerSearch } from '../redux/customerSearchActions'
import SearchFilter from './SearchFilter'

const SearchBar = ({ userData, searchCustomer, clearCustomerSearch }) => {
    
    const searchCust = (val) => {
        console.log()
        searchCustomer()
    };

    const clearSearch = () => {

        clearCustomerSearch()
    };

    return (<><Input></Input>

        <button onClick={searchCust}>Search</button>

        <button onClick={clearSearch}>Clear</button>
        <SearchFilter call={()=>searchCust()}></SearchFilter>
    </>)

}

const mapStateToProps = state => {
    return {
        userData: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCustomer: () => dispatch(searchCustomer()),
        clearCustomerSearch: () => dispatch(clearCustomerSearch())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)