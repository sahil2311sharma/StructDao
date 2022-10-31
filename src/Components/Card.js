import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ElementBox from './ElementBox';
import { Image } from 'react-shimmer'
import Loader from "react-js-loader";

import './../styles/Card.css'
const style = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor:"transparent",
};


const Card = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => 
    {
        console.log("clicked");
        return setOpen(true);
    }
    const handleClose = () => setOpen(false);
  return (
    <div className='cardMain rounded-corners-gradient-borders '>
        <div className='divCentre'>
        {
            props.type === "image"?
            (
                <Image src={props.url} className='cardImage' alt='apiImage' fallback={<Loader type="spinner-circle" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={100} />}/>
            )
            :
            (  
                <img src={props.vid_url} className='cardImage' alt='apiImage' />
            )
        }
        </div>
        
        <div className='cardTitle'>
            {props.title}
        </div>
        <div className='cardDate'>
            {props.date}
            <p onClick={handleOpen}>Explore More</p>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style}>
                <ElementBox type = {props.type} url = {props.hdurl} vid_url = {props.vid_url}/>
            </Box>
            </Modal>
        </div>
    </div>
  )
}

export default Card