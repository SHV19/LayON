import React, { useState } from 'react';
import {Box, Button, Select, MenuItem, makeStyles, CircularProgress} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: {
        backgroundColor:"#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius:"5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
        

    },
})

export default (props) => {

    const [loading, setLoading] = useState(false)
    const [jobSearch, setJobSearch] = useState ({
        
            type: "3 Months",
            location: "Remote"
        
    });

    const handleChange = (e) => {
        e.persist();
        setJobSearch(oldState => ({ 
            ...oldState, 
            [e.target.name]: e.target.value 
        }));
    };

   const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
   }


    const classes = useStyles()

    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled" >
                <MenuItem value = "3 Months">3 Months</MenuItem>
                <MenuItem value = "6 Months">6 Months</MenuItem>
                <MenuItem value = "9 Months" >9 Months</MenuItem>
            </Select>

            

            <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled" >
                <MenuItem value = "Remote">Remote</MenuItem>
                <MenuItem value = "In-office">In-office</MenuItem>
                
            </Select>
            <Button disabled={loading} variant="contained" color="primary" disableElevation onClick={search} >
            {loading ? (<CircularProgress color="secondary" size={22}/> 
                       ) :
                        ("Search")

                    } 
            </Button>
        </Box>
    )
}         