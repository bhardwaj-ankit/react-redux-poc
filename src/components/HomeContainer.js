import React from 'react';
import CustSummaryCard from './CustSummaryCard';
import { useSelector, useDispatch } from 'react-redux'
import '../appstyle.css'

const HomeContainer = () => {
    const result = useSelector(state => state.customer)
    return (
        <div className="welcome">
            {!result.data.length && !result.error && <h1>Welcome User</h1>}
            {/* {result.running && <p>Loading .... </p>}             */}
            {!!result.data.length && result.data.map(cust => <CustSummaryCard key={cust.id} data={cust}></CustSummaryCard>)}
            {result.error && <h1>{result.error}</h1>}
        </div>
    );
};

export default HomeContainer;