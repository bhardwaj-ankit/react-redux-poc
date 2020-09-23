import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../appstyle.css'

const CustSummaryCard = (props) => {
    return (
      
      <div className="box">
        <p>Customer Id : {props.data.id}</p>
        <p>Customer Info : {props.data.title}</p>
        </div>
    )
          
}

export default CustSummaryCard