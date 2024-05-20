import React, { useState } from 'react'
import { Avatar, Chip } from '@mui/material'
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import { defaultUserImg } from '../../../../constants/ImageConstants'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../../../components/Header/Header';
//styles
import "./UserManegment.css"
const UserManegment = () => {
  const [openModal, setopenModal] = useState(false)
  //handle opening and closing of model
  const handleOpen = () => setopenModal(true); //set to open
  const handleClose = () => setopenModal(false);///set to false.
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* searhbar etc */}
      <Header title="User Manegment" />
      {/* list of users  Infinte Scroll*/}
      <div>
        {/* Modal */}
        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={handleClose}
          open={openModal}>

          <div className='UserManegmentModal'>

            <h3 style={{ marginBottom: 10, marginTop: 0,marginLeft:'20px' }}>Are You Sure you Want Delete User</h3>
            <p style={{ marginTop: 0, marginBottom: 0, paddingLeft: 20, paddingRight: 20,color:'#666666',fontSize:'14px' }}>Deleting someone from the database means they'll lose access to services and cease to be a user. It's like removing their digital footprint entirely. They won't be able to log in, access their account, or utilize any associated features. It's essentially cutting off all ties between them and the platform or service.</p>

            {/* Button Container Actions */}
            <div className='ButtonContainerModal'>
              <Button style={{backgroundColor:"#EDEDED",boxShadow:"none",color:'#4F4F4F',fontWeight:"500",border:'1px solid #4F4F4F',textTransform:"initial",fontFamily:"Outfit"}} variant='outlined'   >Cancel</Button>

              <Button  color="error" style={{boxShadow:"none",color:'#fff',fontWeight:"300",textTransform:"initial",fontFamily:"Outfit"}}   variant="contained" >Delete User</Button>
            </div>

          </div>


        </Modal>

        {/* Modal */}
        {/* Card for List User */}
        <div style={{ backgroundColor: "red", width: "100%", height: "10vh", marginTop: 5, marginBlock: 5, borderRadius: 5, display: "flex", alignItems: "center", padding: 3, justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Avatar src={{ defaultUserImg }} />
            {/* Text */}
            <div style={{ marginLeft: 5 }}>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Youvone Isaable</p>
              <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>ha6817334@gmail.com</p>

            </div>
            <Chip label="Online" style={{ fontSize: 10, marginLeft: 5, padding: 2 }} color="primary" />
          </div>
          {/* Chip Container */}
          <div>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Joining Date</p>
            <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>14/2/24</p>

          </div>
          {/* Chip Container */}
          <div>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Phone</p>
            <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>+92332739790</p>
          </div>
          {/* Address */}
          <div>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Address</p>
            <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>135-c Samanabad,Lahore</p>
          </div>
          <div>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Role</p>
            <Chip label="user" style={{ height: 17, backgroundColor: "#e5e5e5" }} />
          </div>
          <div>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Device</p>
            <Chip label="Vivo Y-15 c" style={{ height: 17, backgroundColor: "#e5e5e5" }} />
          </div>
          <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Actions</p>
            <DeleteIcon onClick={handleOpen} />
          </div>
          {/* Text */}
        </div>
        {/* Card for List User */}


      </div>
      {/* Infinte Scroll */}
    </div>
  )
}

export default UserManegment