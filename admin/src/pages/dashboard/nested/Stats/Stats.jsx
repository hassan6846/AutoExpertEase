import React from 'react'
import Header from '../../../../components/Header/Header'
import { AiOutlineUser, AiOutlineUserAdd, } from 'react-icons/ai';
import { BsBox2, BsShop, BsPersonGear } from 'react-icons/bs';
import { LineChart } from "@mui/x-charts/LineChart"
import Avatar from '@mui/material/Avatar';

import "./Stats.css"
import { defaultUserImg } from '../../../../constants/ImageConstants';
const Stats = () => {
  const xLabels = ["Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];

  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Statistics" />
      {/* Cards for maping the earning daily users etc */}
      <div>
        <h5 style={{ marginTop: 10, marginBottom: 0 }}>Welcome Back</h5>
        <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>Let's See What's Happening With The App Called AutoExpertEase.</p>
        {/* Row for Card Statistics. */}
        <section className='statsContainer'>
          {/* Card */}
          <div className='StatsCard'>
            <AiOutlineUser size={30} />
            <h1 style={{ marginTop: 10, marginBottom: 0 }}>50 </h1>
            <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>All Users</p>
          </div>

          {/* Card Ended */}
          <div className='StatsCard'>
            <AiOutlineUserAdd size={30} />
            <h1 style={{ marginTop: 10, marginBottom: 0 }}>50 </h1>
            <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>Today's Registrations</p>
          </div>
          <div className='StatsCard'>
            <BsBox2 size={30} />
            <h1 style={{ marginTop: 10, marginBottom: 0 }}>5000 </h1>
            <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>Total Approved Products Listed. </p>
          </div>
          <div className='StatsCard'>
            <BsShop size={30} />
            <h1 style={{ marginTop: 10, marginBottom: 0 }}>50 </h1>
            <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>Approved Buisness Vendors.</p>
          </div>
          <div className='StatsCard'>
            <BsPersonGear size={30} />
            <h1 style={{ marginTop: 10, marginBottom: 0 }}>50 </h1>
            <p style={{ marginTop: 5, marginBottom: 0, fontSize: '14px' }}>No. of Experts/Buisness Parthners.(Approved)</p>
          </div>
        </section>
        {/* Row Ended */}
        {/* Add A graph to Show No of User by Time. */}
        <div className='GraphContainer'>
          {/* App Visitors Graph*/}
          <div className='WeeklySignupGraph'>
            <h4 style={{ marginBottom: 0, marginTop: 20 }}>Weekly Signup Graphical Overview.</h4>
            <p style={{ marginBottom: 0, marginTop: 0, fontSize: 12 }}>7 days.</p>
            <LineChart
              grid={{ vertical: true, horizontal: true }}

              xAxis={[{ scaleType: "point", data: xLabels }]}

              series={[
                {
                  data: [2, 10, 100, 12, 300, 600, 900],
                  area: true,
                },

              ]}
              width={800}
              height={400}
            />
          </div>
          {/* App Visitors Graphs Ended*/}
          {/* Recent Signups. */}
          <div className='RecentSignups'>
            <h3 style={{ marginBottom: 0, marginTop: 20 }}>Recent Signups.</h3>
            <p style={{ marginBottom: 0, marginTop: 0, fontSize: 12 }}>See Users Who just signed up.</p>
            {/* Scrollable */}
            <div style={{display:'flex',flexDirection:"column",rowGap:10,marginTop:10}}>
              {/* User Card */}
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              <div style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ marginRight: 5 }} src={defaultUserImg} />
                <div>
                  <p style={{ marginBottom: 0, marginTop: 0 }}> Hassan Shehriyar Ali</p>
                  <p style={{ marginBottom: 0, marginTop: 0, fontSize: "12px" }}>Vivo Y-15C</p>
                </div>
              </div>
              {/* User Card */}
            </div>
            {/* Scrollable */}
          </div>
          {/* Recent Signups Ended. */}
        </div>
        {/* Graph and New User Row Ended. */}
      </div>
    </div>
  )
}

export default Stats