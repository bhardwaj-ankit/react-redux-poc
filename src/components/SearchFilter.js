import React from 'react';

function SearchFilter(props) {
    const onClick = () => {
        console.log('Filter')
        console.log(props.call);
        props.call('Customer');
    }
    return (
        <div>
            <input type="radio" id="cust" name="type" onClick={onClick}></input>
            <label htmlFor="cust">Customer</label>
            <input type="radio" id="add" name="type" onClick={onClick}></input>
            <label htmlFor="add">Address</label>
        </div>
    );
}

export default SearchFilter;