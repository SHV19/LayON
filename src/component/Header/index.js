import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core'

export default props => (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs ={10}>

            
            <Box mb={10}>
                <Box mb={5}>
                <Typography variant="h1" color="primary"> 
                Layoffs! Layoffs! Layoffs!

            </Typography>

                </Box>
            
            <Box mb={3}>
            <Typography variant="h6"> 
            The term "layoff" has been widely used in recent times, as many companies have
            been forced to let go of a large number of employees around the world. Among the
            notable corporations that have carried out such actions are Amazon, Google, and
            several others. The reasons for these layoffs vary and can be attributed to a
            multitude of factors.
                
            </Typography>

            </Box>

            <Box  mb={3}>
            <Typography variant="h6"> 
            Losing a job can be a difficult time for someone, especially if they have financial
            commitments to meet. It can take a while for them to find a new job that offers the
            same salary as their previous job. For instance, if they wish to work for XYZ Company,
            the hiring process alone could take anywhere from 2-4 months. However, they cannot just
            sit at home without any income because of their commitments.
                
            </Typography>
                
            </Box>

            <Box  mb={3}>
            <Typography variant="h6">
            To tackle this issue, a platform called LayON<img style={{ width: 20, height: 20 }} src="./layonlogo.png" className="App-logo" alt="logo" /> has been developed. This platform aims to assist
            early-stage startups in need of experienced developers. They can list their requirements and duration
            on the website. Individuals can then search for short-term gigs ranging from 3-9 months to earn money
            while preparing for their next job.
            </Typography>
            </Box>

            
            <Box  mb={3}>
            <Typography variant="h6">
            LayON<img style={{ width: 20, height: 20 }} src="./layonlogo.png" className="App-logo" alt="logo" /> operates as a community-driven website where people can openly post their requirements.
            It provides a win-win situation for both parties involved.
            </Typography>

            </Box>

            <Box mb={3}>
                <Typography variant="h7">Developed by: SAI HARI VIGNESH</Typography>
            </Box>
            

            


            </Box>
            



<img style={{ width: 50, height: 50 }} src="./layonlogo.png" className="App-logo" alt="logo" />

                <Box display="flex" justifyContent="space-between" >
                    
    <Typography variant="h4" >
        
            <Typography variant="h3">LayON</Typography>  
        
        
    </Typography>
    
    <Button onClick={props.openNewJobModal} variant="contained" color="primary" disableElevation>Post A Job</Button>
    </Box>
    </Grid>
    </Grid>
</Box>
);