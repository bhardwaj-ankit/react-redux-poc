import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../appstyle.css'

const CustSummaryCard = () => {
  const result = useSelector(state => state.customer)
    return (
      
      <div className="box">
        <p>Customer Id : {result.data.id}</p>
        <p>Customer Info : {result.data.title}</p>
        </div>
    )
          
}

export default CustSummaryCard