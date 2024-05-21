import React from 'react'
import Header from '../../../../components/Header/Header'
//Mui
import Avatar from "@mui/material/Avatar"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { defaultUserImg } from '../../../../constants/ImageConstants'
//css
import "./VendorRequest.css"
const VendorRequest = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Vendor Requests" />
      {/* Card Example map Container */}
      <section className='RequestContainer'>
        <div className='RequestCard'>

          <div className='TextContainerRequests'>
          <Avatar  style={{marginRight:'5px'}} src={defaultUserImg} />
          <div>  <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>Hassan Shehriyar </span>applied for vendorShip on the app</p>
            <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>2hrs Ago</p></div>
          </div>
          <NavigateNextIcon />
        </div>
      </section>
      {/* Containe Ends */}
    </div>
  )
}

export default VendorRequest