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
import { IoLogoWhatsapp } from "react-icons/io";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Best from './Best'
import Reviews from './Reviews';
import image1 from '../../assets/download (1).png';
import image2 from '../../assets/download.png'
import image3 from '../../assets/person1-removebg-preview.png';
import image4 from '../../assets/person2-removebg-preview.png';
import image5 from '../../assets/image10.jpg'
import logo from '../../assets/logo-removebg-preview.png'
import { Link } from "react-router-dom";
import { Trial7 } from './Trial7';


const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
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
    <div>
        <nav nav className="navbar flex justify-between px-16 items-center fixed-top navbar-expand-lg " id="nav_design">
        <a
          class="navbar-brand"
          href="#"
          style={{
            marginLeft: "1.2vw",
            marginTop:"10px",
            fontFamily: "Sacramento",
            fontSize: "40px",
            color: "#563300",
          }}
        >
          <img style={{ width: "230px" ,marginTop:"10px"}} src={logo} alt="helo" />
        </a>
        
       
       
        <div className="font-constantia relative after:content-[''] pb-2 after:block after:h-[4px] after:w-[100%] after:bg-amber-950 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 text-2xl  transition-all delay-100 ease-in cursor-pointer pt-4">
              <Link  to="/trial4">
                Analytics
              </Link>
            </div>
      </nav>
    <div className='grid grid-cols-3  py-8 gap-8 px-2 bg-[#F2EAE2]'>
        <div className='hover:shadow-2xl'>
            <h1 className='hover:shadow-2xl text-center font-bold text-3xl'>Daily Sales</h1>
            <Paper sx={{ borderRadius: '20px',}} elevation={4}>
          
                <Trial/>
            </Paper>
            
        </div>
        <div className='flex flex-col  items-center gap-2'>
        <h1 className=' text-center font-bold text-3xl'>Coupons</h1>
        
        <Mover1/>
            <button className=' bg-white border-4 w-[250px] my-2 py-2 rounded-3xl' onClick={handleOpen}>Economics</button>
        </div>
        

       
        <div className='hover:shadow-2xl'>
        <h1 className=' text-center font-bold text-3xl'>Weekly Sales</h1>

        <Paper elevation={4} sx={{borderRadius: '20px'}}>

            <Trial2/>
        </Paper>
        </div>
        <div>
            <p className='text-center font-bold text-3xl'>Hot Coffee</p>
        <img src={image2}></img>
            </div>
        <div className='hover:shadow-2xl'>
        <h1 className=' text-center font-bold text-3xl pb-2'>Customer Analysis</h1>

            
        <Paper elevation={4} sx={{borderRadius: '20px'}}>
            
            <Reviews/>
            </Paper>
            
            </div>
        <div>
        <p className='text-center font-bold text-3xl'>Food Menu</p>

        <img src={image5}></img>
        </div>
        <div>
        <h1 className=' text-center font-bold text-3xl pb-2'>Hourly Analysis</h1>
        <Paper elevation={4} sx={{borderRadius: '10px', backgroundColor:"white",marginTop:"40px"}}>
                <Trial7/>
                </Paper>

        </div>
        <div>
        <h1 className=' text-center font-bold text-3xl pb-2'>Sales Analysis</h1>

        <Paper sx={{ borderRadius: '20px',paddingLeft:"60px",paddingRight:"60px",paddingBottom:"13px" , backgroundColor:"#AB877D"}} elevation={4}>
               <Trial3/>
            
            </Paper>
            </div>
        
        <div  className='p-2'><Paper elevation={4} sx={{borderRadius: '10px', backgroundColor:"#AB877D"}}>
            <div  className='flex justify-center text-3xl py-2 text-white'>Market Basket Analysis</div>
            <Best/>
            </Paper></div>
            <div>
                
            </div>
            <div><div className='flex flex-col mr-10 pt-12 items-center gap-'>
            <div  className='flex'>
            
            <div className='flex flex-col items-center'>
                <p className=' font-semibold text-lg'>Biller Kundan</p>

            <img src={image3} style={{width:200,height:190}}/>
            <p>Has Served Most</p>
            <p>Customers</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className=' font-semibold text-lg'>Sabina Khan</p>
            <img src={image4} style={{width:200,height:190}}/>
            <p className='flex justify-center'>Customers favourite staff </p>
            <p>member</p>
            </div>
            </div>



            <div className='text-3xl py-2'>
                Best Employees
            </div>



        </div></div>
            <div></div>

        <button onClick={handleOpen1}>
        <div style={{position:"absolute",top:"65%",right:"5%",zIndex:"50"}}>
            <IoLogoWhatsapp  size={80} className=' sticky text-green-400'/>
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
                <Grid item md={0}></Grid>
                <Grid item md={10}>
                    <Trial5/>
                </Grid>
                <Grid item md={2}>
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
        <TextField id="outlined-basic" label="Message for everyone" variant="outlined" fullWidth value={text} onChange={textchange}/>
        <br/>
        <Button filled onClick={notif}>Notify</Button>
        </Box>
      </Modal>

    </div>
    </div>

  )
}

export default Trial4
