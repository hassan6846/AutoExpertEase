import React from 'react'
import Header from '../../../../components/Header/Header'
//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar } from '@mui/material'
import "./ApproveCars.css";
import { defaultUserImg } from '../../../../constants/ImageConstants';

const ApproveCars = () => {
  return (
    <div>
      <Header title="Car Approval " />
      <section>
        <div className='TaskCard'>

          <div className='TextContainerTask'>
            <Avatar style={{ marginRight: '5px' }} src={defaultUserImg} />
            <div>  <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>Hassan Shehriyar </span>applied for vendorShip on the app</p>
              <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>2hrs Ago</p></div>
          </div>
          <NavigateNextIcon />
        </div>
      </section>
    </div>
  )
}

export default ApproveCars