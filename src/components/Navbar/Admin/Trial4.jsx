import React from 'react'
import Trial from './Trial'
import Trial2 from './Trial2'
import Trial3 from './Trial3'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Trial5 } from './Trial5'
import { Grid,Paper } from '@mui/material'
import Mover1 from './Mover1';
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Best from './Best'
import Reviews from './Reviews';
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const style1 = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Trial4 = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [text,setText]=React.useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const textchange=(e)=>{
        setText(e.target.value)
        console.log(e.target.value);
    }

    const notif=()=>{
let data = JSON.stringify({
  "text": text
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://127.0.0.1:5000/whatsapp',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  setText("")
})
.catch((error) => {
  console.log(error);
  setText("")
});
    }
  return (
    <div className='grid grid-cols-3  py-8 gap-8 px-2 bg-[#F2EAE2]'>
        <div>
            <Paper sx={{ borderRadius: '20px',}} elevation={4}>
                <Trial/>
            </Paper>
            
        </div>
        <div className='flex flex-col  items-center gap-2'>
        <Paper sx={{ borderRadius: '20px',paddingLeft:"60px",paddingRight:"60px",paddingBottom:"13px" , backgroundColor:"#AB877D"}} elevation={4}>
               <Trial3/>
            <button className=' bg-white border-4 w-[250px] my-2 py-2 rounded-3xl' onClick={handleOpen}>Economics</button>
            </Paper>
            
        </div>
        

       
        <div>
        <Paper elevation={4} sx={{borderRadius: '20px'}}>
            <Trial2/>
        </Paper>
        </div>
        <div>
        <Paper elevation={4} sx={{borderRadius: '20px', backgroundColor:"#AB877D"}}>
            <Best/>
            </Paper>
            </div>
        <div>
            
        <Paper elevation={4} sx={{borderRadius: '20px'}}>
            
            <Reviews/>
            </Paper>
            
            </div>
        <div><Mover1/></div>
        <div>
            </div>
        <div></div>
        <div></div>

        <button onClick={handleOpen1}>
        <div style={{position:"absolute",top:"90%",left:"95%"}}>
            <FaWhatsapp size={60} className=' text-green-700'/>
        </div>
        </button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <Grid container>
                <Grid item md={6}>
                    <Trial5/>
                </Grid>
                <Grid item md={6}>
                        <div className='overflow-hidden'>
                        <div className='p-12 border-2 rounded-3xl transition delay-100 ease-in scale-lg hover:scale-110 hover:shadow-2xl flex justify-center w-[5rem]'>hello</div>
                        </div>
                </Grid>
            </Grid>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1} >
        <TextField id="outlined-basic" label="Message for evryone" variant="outlined" fullWidth value={text} onChange={textchange}/>
        <br/>
        <Button filled onClick={notif}>Notify</Button>
        </Box>
      </Modal>

    </div>
  )
}

export default Trial4
