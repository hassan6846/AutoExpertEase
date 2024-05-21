import React from 'react'
import Header from '../../../../components/Header/Header'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from "@mui/material/Avatar"
import { defaultUserImg } from '../../../../constants/ImageConstants';
import "./ExpertRequests.css"
const ExpertRequests = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Expert Requests" />
      {/* Infinite Scroll List */}
      <section style={{ marginTop: '10px', cursor: "pointer" }}>
        <div className='ExpertReqCard'>
          <div className='TextContainerReq'>
            <Avatar style={{ marginRight: '5px' }} src={defaultUserImg} />
            <div>  <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>Hassan Shehriyar's   </span>Applied the Expert/Buisness parthner for approval.</p>
              <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>2hrs Ago</p></div>
          </div>
          <NavigateNextIcon />
        </div>
      </section>
      {/* Infinite ScrollList */}
    </div>
  )
}

export default ExpertRequests