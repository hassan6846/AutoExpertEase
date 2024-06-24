import React, { useState } from 'react';
import { Avatar, Button, Modal } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { defaultUserImg } from '../../../../constants/ImageConstants';
import Header from '../../../../components/Header/Header';
import "./RentalRequest.css";
import {PhoneAndroid} from "@mui/icons-material/"
const RentalRequest = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleOpen = (userId) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Allow/Authorize users to rent cars." />
      <section style={{ marginTop: '10px', cursor: "pointer" }}>
        <div className='ExpertReqCard' onClick={() => handleOpen('randomUserID')}>
          <div className='TextContainerReq'>
            <Avatar style={{ marginRight: '5px' }} src={defaultUserImg} />
            <div>
              <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>Hassan Shehriyar's   </span>Applied for Expert/Business partner approval.</p>
              <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>2hrs Ago</p>
            </div>
          </div>
          <NavigateNextIcon />
        </div>
      </section>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
        open={openModal}
      >
        <div className='UserManegmentModal'>
          <h3 style={{ marginBottom: 10, marginTop: 0, marginLeft: '20px' }}>Are You Sure you Want to Approve this Request?</h3>
          {/* Add Avatar, Name, Date of Birth, Selfie, CNIC images */}
          {/* Below are just placeholders */}
          <Avatar style={{ margin: 'auto' }} src={defaultUserImg} />
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Hassan Shehriyar </p>
          {/* Device */}


        
          {/* Placeholder for selfie */}
          <img src={defaultUserImg} alt="selfie" style={{ display: 'block', margin: 'auto', marginBottom: '20px',height:100 }} />
          {/* Placeholder for CNIC image */}

          <img src={defaultUserImg} alt="cnicfront" style={{ display: 'block', margin: 'auto',width:"400px",height:"200px" }} />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#999' }}>front Cnic</p>


          <img src={defaultUserImg} alt="cnic Back" style={{ display: 'block', margin: 'auto',width:"400px",height:"200px" }} />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#999' }}>Back Cnic</p>
          <div className='ButtonContainerModal'>
            <Button style={{ backgroundColor: "#EDEDED", boxShadow: "none", color: '#4F4F4F', fontWeight: "500", border: '1px solid #4F4F4F', textTransform: "initial", fontFamily: "Outfit" }} variant='outlined' onClick={handleClose}>Cancel</Button>
            <Button color="primary" style={{ boxShadow: "none", fontWeight: "300", textTransform: "initial", fontFamily: "Outfit" }} variant="contained" onClick={() => console.log("Request Approved")}>
              Approve Request
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RentalRequest;
