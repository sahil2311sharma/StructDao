import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ElementBox from './ElementBox';

import './Card.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Card = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='cardMain rounded-corners-gradient-borders '>
        <div className='divCentre'>
        {
            props.type === "image"?
            (
                <img src={props.url} className='cardImage'/>
            )
            :
            (  
                <img src={props.vid_url} className='cardImage'/>
            )
        }
        </div>
        
        <div className='cardTitle'>
            {props.title}
        </div>
        <div className='cardDate'>
            {props.date}
        </div>
        <div style={{color:"wheat", display:"flex", justifyContent:"center", alignItems: "center"}}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style}>
                <ElementBox/>
            </Box>
      </Modal>
        </div>
    </div>
  )
}

export default Card