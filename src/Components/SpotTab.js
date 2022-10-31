import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ElementBox from './ElementBox';
import Loader from "react-js-loader";
import './../styles/Spotlight.css'
import ElementBoxOne from './ElementBoxOne';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor:"transparent",
  
};
const SpotTab = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='spotlightMain'>
      <div className='makeCentre-l'>
          <div className='distSeperator'>
              <h1 className="reveal blue">{props.title}</h1>
              <h5 className="reveal purple">
                  {props.explanation}
              </h5>
              <h2 className="reveal purple" >
                  {props.name}
              </h2>
          </div>
      </div>
      <div className='makeCentre'>
          <div className='spotlightImgBox'>
              {props.type === "image"?
              (
                  <img src={props.url} onClick={handleOpen}  className='spotImage' alt='APIImage' fallback={
                //   <Shimmer width={800} height={600} />}
                  <Loader type="spinner-circle" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={100} />}
                />
              ):(
                  <img src={props.vid_url} onClick={handleOpen}  className='spotImage' alt='APIImage'/>
              )
              }
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
                <ElementBoxOne  type = {props.type} url = {props.hdurl} vid_url = {props.vid_url}/>
            </Box>
            </Modal>
        </div>
      </div>
    </div>
  )
}

export default SpotTab