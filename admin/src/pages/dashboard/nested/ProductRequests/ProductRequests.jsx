import React from 'react'
import Header from '../../../../components/Header/Header'
import "./ProductRequests.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { defaultUserImg } from '../../../../constants/ImageConstants';
import Avatar from "@mui/material/Avatar"


const ProductRequests = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Product Requests" />
      {/* Scrollable Content cards container */}
      <section style={{marginTop:'10px',cursor:"pointer"}}>
        <div className='ProductRequestCard'>

          <div className='TextContainerProductRequests'>
            <Avatar style={{ marginRight: '5px' }} src={defaultUserImg} />
            <div>  <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>Hassan Shehriyar's Store  </span>Applied the product for approval.</p>
              <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>2hrs Ago</p></div>
          </div>
          <NavigateNextIcon />
        </div>
      </section>
      {/* Scrollable Content cards container */}
    </div>
  )
}

export default ProductRequests