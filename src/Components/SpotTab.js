import React, { useState } from 'react'
import './../styles/Spotlight.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ElementBox from './UI/ElementBox';



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
          <div style={{marginRight:"20px"}}>
              <h1 className="reveal blue">{props.title}</h1>
              <h5 className="reveal purple">
                  {props.explanation}
              </h5>
              <h2 className="reveal purple" style={{paddingLeft:"20px", marginBottom:"30px", }}>
                  {props.name}
              </h2>
          </div>
      </div>
      <div className='makeCentre'>
          <div style={{margin:"50px ", backgroundColor:"#D9D9D9", height:"492px", padding:"2px", borderRadius: "20px" }}>
              {props.type === "image"?
              (
                  <img src={props.hdurl} onClick={handleOpen}  className='spotImage' alt='APIImage'/>
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
                <ElementBox  type = {props.type} url = {props.url} vid_url = {props.vid_url}/>
            </Box>
            </Modal>
        </div>
      </div>
    </div>
  )
}

export default SpotTab