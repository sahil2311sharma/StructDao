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
  backgroundColor:"#2c2c2c",
  width:"80%",
  height:"80%",
  borderRadius:"50px",
};


const Card = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => 
    {
        return setOpen(true);
    }
    const handleClose = () => setOpen(false);
  return (
    <div className='cardMain rounded-corners-gradient-borders '>
        <div className='divCentre' onClick={handleOpen}>
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
                <ElementBox
                    explanation = {props.explanation}
                    title = {props.title}
                    name = {props.name}
                    type = {props.type} url = {props.hdurl} vid_url = {props.vid_url}/>
            </Box>
            </Modal>
        </div>
    </div>
  )
}

export default Card