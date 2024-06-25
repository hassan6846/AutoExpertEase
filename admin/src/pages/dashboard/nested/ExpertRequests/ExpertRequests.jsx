import React, { useEffect, useState } from 'react';
import { Avatar, Button, Modal } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { defaultUserImg } from '../../../../constants/ImageConstants';
import Header from '../../../../components/Header/Header';
import "./ExpertRequests.css";
import axios from 'axios';

const ExpertRequests = () => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [applications, Setapplications] = useState([])
  const handleOpen = (userId) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);
  ////////////////////
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/admin/expert-applications');
        console.log(response.data);
        Setapplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError(error.message);
      }
    };

    fetchApplications();
  }, []);
  ///////////
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Expert Requests" />
      <section style={{ marginTop: '10px', cursor: "pointer" }}>
        {
          applications.map((application, index) => (
            <div key={index} className='ExpertReqCard' style={{ backgroundColor: "#f5f5f5" }} onClick={() => handleOpen(application)}>
              <div className='TextContainerReq'>
                <Avatar style={{ marginRight: '5px' }} src={defaultUserImg} />
                <div>
                  <p>
                    <span style={{ fontWeight: "bold", marginBottom: 0 }}>
                     {application.firstName}   {application.LastName}
                    </span> Applied for Expert/Business partner approval.
                  </p>
                  <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}> {new Date(application.createdAt).toLocaleString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            }).replace(',', ' At')}</p>
                </div>
              </div>
              <NavigateNextIcon />
            </div>
          ))
        }

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
          <img src={defaultUserImg} alt="selfie" style={{ display: 'block', margin: 'auto', marginBottom: '20px', height: 100 }} />
          {/* Placeholder for CNIC image */}

          <img src={defaultUserImg} alt="cnicfront" style={{ display: 'block', margin: 'auto', width: "400px", height: "200px" }} />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#999' }}>front Cnic</p>


          <img src={defaultUserImg} alt="cnic Back" style={{ display: 'block', margin: 'auto', width: "400px", height: "200px" }} />
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

export default ExpertRequests;
