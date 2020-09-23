import React from 'react';
import CustSummaryCard from './CustSummaryCard';
import { useSelector, useDispatch } from 'react-redux'
import '../appstyle.css'

const HomeContainer = () => {
    const result = useSelector(state => state.customer)
    return (
        <div className="welcome">
            {!result.data && !result.error && <h1>Welcome User</h1>}
            {/* {result.running && <p>Loading .... </p>}             */}
            {!!result.data.id && <CustSummaryCard data={result.data}></CustSummaryCard>}
        </div>
    );
};

export default HomeContainer;