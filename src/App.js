import { Box, Button, Container, Grid, InputBase, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import charkha from './assests/charkha.jpeg'
import imgdata from './assests/redbg.png';
import sign from './assests/signimage.png';
import './print-styles.css';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function App() {
  const [val1, setVal1] = useState(() => Math.floor(1000 + Math.random() * 9000));
  const [val2, setVal2] = useState(() => Math.floor(Math.random() * 90 + 10));
  const [screen, setScreen] = useState(true)
  const [data, setData] = useState({
    image: imgdata,
    name: "",
    post: "",
    district: "",
    mobile: "",
    email: "",
    address: "",
    date: ""
  })

  console.log(val2)

  const handleFileChange = (e) => {
    setData({ ...data, image: URL.createObjectURL(e.target.files[0]) })
  }

  const handleSetValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSavePdf = () => {
    window.print()
    setScreen(true)
  }

  useEffect(() => {
    // Save the random numbers in localStorage
    localStorage.setItem('val1', val1);
    localStorage.setItem('val2', val2);
  }, [val1, val2]);


  // console.log(data)

  return (

    <Container disableGutters maxWidth={'xl'}>

      <Grid container sx={{ justifyContent: "center", alignItems: "center", height: "100vh", p: "5px" }}>
        <Grid item xs={12} sm={11} md={10} lg={7} >
          <Paper elevation={3}>
            <Grid container sx={{ zIndex: 9999 }}>
              <Grid item xs={5} sx={{ backgroundImage: `url(${charkha})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                <Box sx={{ display: screen ? "flex" : "none", justifyContent: "space-around", alignItems: "center", height: { lg: "65px", md: "60px", sm: "50px", xs: "40px" } }}>
                  <Button
                    className="print-only-button hide-on-print"
                    sx={{
                      display: screen ? { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' } : 'none',
                      color: 'white',
                      bgcolor: 'black',
                      '&:hover': { bgcolor: 'black' },
                      border: '1.5px solid gray',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                      fontSize: { xs: '7px', sm: '8px', md: '11px', lg: '12px' },
                      position: "relative",
                      '@media print': {
                        display: 'none', 
                      }
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={{ border: "1px solid white", position: "absolute", height: "100%", width: "100%", opacity: 0 }}
                      onChange={handleFileChange}
                    />
                    Upload Image
                  </Button>

                  <Button
                    className="print-only-button hide-on-print"
                    onClick={() => { handleSavePdf(); }}
                    sx={{
                      display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
                      color: "white",
                      bgcolor: "black",
                      "&:hover": { bgcolor: "black" },
                      border: "1.5px solid gray",
                      borderRadius: "20px",
                      whiteSpace: "nowrap",
                      fontSize: { xs: "7px", sm: "8px", md: "11px", lg: "12px" },
                      position: "relative",
                      '@media print': {
                        display: 'none', // Hide when printing
                      }
                    }}
                  >
                    Print pdf
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={7} sx={{ height: "fit-content", zIndex: 999999999, p: "10px" }}>
                <Grid container>
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ textTransform: "uppercase", fontSize: { lg: "20px", md: "17px", sm: "14px", xs: "13px" }, fontWeight: { lg: 600, md: 600, sm: 800, xs: 800 }, color: "black", letterSpacing: "0.5px" }}>
                      Registration no {val1}/{val2}
                    </Typography>
                  </Grid>

                  <Grid container sx={{ alignItems: "center", justifyContent: "center", mt: "10px" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                      <Typography sx={{ fontSize: { lg: '19px', md: '17px', sm: '15px', xs: '14px' }, mr: "15px", display: 'flex', justifyContent: { xs: 'left', sm: "left", md: "right", lg: "right" }, alignItems: 'center' }}>
                        Name:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <InputBase placeholder='Type here...' name='name' value={data.name} fullWidth sx={{ borderRadius: "5px", pl: "4px", border: screen == true ? "1px solid #e0e0e0" : "", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, border: "1px solid #e0e0e0", height: "40px", ml: '3px', pt: "4px" }} onChange={handleSetValue} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "10px" }}>
                      <Typography sx={{ whiteSpace: 'nowrap', fontSize: { lg: '19px', md: '17px', sm: '15px', xs: '14px' }, mr: "15px", display: 'flex', justifyContent: { xs: 'left', sm: "left", md: "right", lg: "right" }, alignItems: 'center' }}>
                        District-State/Country:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: { lg: "10px", md: "10px", sm: "0px", xs: "0px" } }}>
                      <InputBase placeholder="Type here..." name='district' value={data.district} fullWidth sx={{ borderRadius: "5px", pl: "4px", border: screen ? "1px solid #e0e0e0" : "", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, border: "1px solid #e0e0e0", height: "40px", ml: '3px', pt: "4px" }} onChange={handleSetValue} />
                    </Grid>


                    {/* <Grid item xs={12} sm={12} md={6} lg={6} sx={{mt:"10px"}}>
                      <Typography sx={{ whiteSpace: 'nowrap',display:"flex",justifyContent: {xs:'center',sm:"center",md:"right",lg:"right"},  fontSize: { lg: '19px', md: '17px', sm: '15px', xs: '14px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        District-State/Country:
                      </Typography>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={6} lg={6} sx={{mt:{lg:"10px",md:"10px",sm:"0px",xs:"0px"}}}>
                      <InputBase placeholder="Type here..." name='district' value={data.district} fullWidth sx={{ borderRadius:"5px",fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, height: "40px", ml: '3px', pt: "3px",border:"1px solid #e0e0e0" }} onChange={handleSetValue} />
                    </Grid> */}


                  </Grid>

                  <Grid container sx={{ mt: "3px" }}>
                    <Grid item xs={3} sx={{ position: "relative", height: "fit-content" }}>
                      <Box sx={{ height: { lg: "120px", md: "120px", sm: "120px", xs: "50px" }, width: "95%", mt: { lg: "15px", md: "25px", sm: "25px", xs: "10px" } }}>
                        <img alt='img' src={data.image} height={"100%"} width={"100%"} />
                      </Box>

                    </Grid>
                    <Grid item xs={9} sm={9} md={7.2} letterSpacing={.2} sx={{}}>
                      <Box sx={{ mt: { lg: "27px", md: "25px", sm: "25px", xs: "13px" }, display: "flex", alignItems: "center" }}>
                        <Typography><AddIcCallIcon sx={{ mr: { lg: "10px", md: "10px", sm: "5px", xs: "3px" }, mt: "3px", fontSize: { lg: "30px", md: "30px", sm: "20px", xs: "20px" } }} /></Typography>
                        <InputBase placeholder='Type here...' style={{ border: screen ? "1px solid #e0e0e0" : "", pl: "4px" }} type='number' name='mobile' value={data.mobile} onChange={handleSetValue} sx={{ bgcolor: "white", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, pl: "3px", borderRadius: "5px" }} fullWidth />
                      </Box>
                    </Grid>



                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px", zIndex: 999999 }}>
                      <Box sx={{ width: { lg: "90%", md: "90%", sm: "100%", xs: "100%" }, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontSize: { lg: "22px", md: "19px", sm: "16px", xs: "13px" }, color: "black", fontWeight: "700" }}>
                            दिनांक -
                          </Typography>
                          <Box sx={{ width: { xs: "80px", sm: "80px", md: "80px", lg: "120px" }, ml: "3px" }}>
                            <input placeholder='dd/mm/yy' name='date' value={data.date} onChange={handleSetValue} style={{ width: "100%" }} />
                          </Box>
                        </Box>
                        <Box>
                          <Typography align='right' sx={{ fontSize: { lg: "22px", md: "19px", sm: "16px", xs: "15px" }, color: "black", whiteSpace: "nowrap", fontWeight: "700" }}>
                            वैध है
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
