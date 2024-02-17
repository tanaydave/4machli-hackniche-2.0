import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    height: "100%",
    backgroundColor: "#F2F3F7",
    marginTop: "10vh",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30px!important",
    },
  },
}));

const Admin = () => {

    console.log("hello");
  const classes = useStyles();
  return (
    <>

    helo
    <Grid
        container
        columnSpacing={4}
        className={classes.flexItem}
        sx={{ marginTop: "10vh" }}
      >
        <Grid item md={4} xs={12} lg={4}>
          <Grid item xs={10} lg={12} md={12} mt={3} ml={7} mb={2}>
          </Grid>
          <Grid item xs={10} lg={12} md={12} mt={3} sx={{ marginLeft: "4vw" }}>
          </Grid>
          <Grid item xs={10} lg={12} md={12} mt={3} sx={{ marginLeft: "4vw" }}>
          </Grid>
          {/* <Grid item xs={10} lg={12} md={12} mt={5} ml={7} >
                            <InterviewScheduleCard />
                        </Grid> */}
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid item xs={10} md={12} mt={3} lg={12}>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} lg={4}>
          <Grid item xs={10} lg={12} md={12} mt={3}>
          </Grid>
          <Grid item xs={10} lg={12} md={12} mt={3}>
          </Grid>
          <Grid item xs={10} lg={12} md={12} mt={3}>
          </Grid>
        </Grid>

        <Grid item md={11} xs={10} lg={11}>
          <Grid item md={12} xs={10} mt={3} lg={12} mb={5}>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Admin;