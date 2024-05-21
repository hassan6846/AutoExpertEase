import React, { useState } from 'react'
import Header from '../../../../components/Header/Header'
//Mui
import Avatar from "@mui/material/Avatar"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { defaultUserImg } from '../../../../constants/ImageConstants'
import Modal from "@mui/material/Modal"
//css
import "./VendorRequest.css"
const VendorRequest = () => {
  const [openModal, setopenModal] = useState(false)
  //handle opening and closing of model
  const handleOpen = () => setopenModal(true); //set to open
  const handleClose = () => setopenModal(false);///set to false.
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Vendor Requests" />
      {/* Modal */}
      <Modal 
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         onClose={handleClose}
         open={openModal}
      >
        <p>Wow</p>
      </Modal>
      {/* Modal Ended */}
      {/* Card Example map Container */}
      <section className='RequestContainer'>
        <div onClick={handleOpen} className='RequestCard'>

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