import { Avatar, Chip } from '@mui/material'
import React from 'react'
import { defaultUserImg } from '../../../../constants/ImageConstants'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../../../components/Header/Header';
const UserManegment = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* searhbar etc */}
   <Header title="User Manegment"/>
      {/* list of users  Infinte Scroll*/}
      <div>
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
            <DeleteIcon />
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