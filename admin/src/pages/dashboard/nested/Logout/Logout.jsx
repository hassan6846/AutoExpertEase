import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Logout = () => {
    return (
        <div style={{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",display:"flex"}}>
          
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <CircularProgress/>
        <p>Please Wait ....</p>
        </div>
        
        </div>
    )
}

export default Logout