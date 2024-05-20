import React from 'react'
import "./AllProduct.css"
import { Avatar,Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { defaultUserImg } from '../../../../constants/ImageConstants'
import ProductCard from '../../../../components/ProductCard/ProductCard';

const AllProducts = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* searhbar etc */}
      <div style={{ backgroundColor: '#e5e5e5', height: "10vh", borderRadius: 10 }}>

      </div>
      {/* The product wrapper for Alliginig products Should be wrap in flex */}
      <p style={{ fontSize: 20 }}>Products</p>

      <div style={{ height: "100%", position:"relative",backgroundColor: "#fff", width: "240px",borderRadius:5,cursor:"pointer"}}>
  {/* Start Card */}
        <div style={{ height: "100%", position:"relative",backgroundColor: "#fff", width: "240px",borderRadius:5,cursor:"pointer",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",padding:10}}>
         <DeleteIcon style={{position:"absolute",right:5,top:10,backgroundColor:"rgba(255, 0, 0, 0.479)",borderRadius:5,fill:"#fff"}}/>
          <img style={{borderRadius:5, height: "40vh", objectFit: 'cover', backgroundColor: "red",width:"100%" }} src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
          <div style={{flexDirection:'row',display:"flex",alignItems:"center"}}>    
            <Avatar src={defaultUserImg}/>    
            <div>
            <p style={{fontSize:12,marginLeft:5,marginBottom:2}}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <Chip style={{fontSize:9,marginLeft:2,marginBottom:2}} label="men"/>
            <Chip   style={{fontSize:9,marginLeft:2,marginBottom:2}} label="bags"/>
            <Chip   style={{fontSize:9,marginLeft:2,marginBottom:2}} label="accessories"/>
            
            </div>
           </div>
         
        </div>
{/* End */}

      </div>

    </div>
  )
}

export default AllProducts