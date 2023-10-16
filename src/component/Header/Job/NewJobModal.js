import React, { useState } from "react";
import { 
    Box, 
    Grid, 
    FilledInput, 
    Select, 
    MenuItem, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    makeStyles,
    Typography, 
    Button,
    IconButton,
    CircularProgress
} from '@material-ui/core';

import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    skillChip: {
        margin: theme.spacing(0.5),
       padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",         
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color:"#fff",
        },

    },

    included: {
        backgroundColor: theme.palette.secondary.main,
            color:"#fff",
    }

}));

const initState = {
            title: "",
            type: "3 Months",
            companyName: "",
            companyUrl: "",
            location: "Remote",
            link: "",
            description: "",
            skills: [],
}

export default props => {
    const [loading, setLoading] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);

    const handleChange = e => {
        e.persist();
        setJobDetails(oldState => ({ 
            ...oldState, 
            [e.target.name]: e.target.value 
        }));
    };


    const addRemoveSkill = skill => jobDetails.skills.includes(skill)
    ? setJobDetails(oldState => ({ ...oldState, skills: oldState.skills.filter(s => s!= skill)}))
    : setJobDetails(oldState => ({ ...oldState, skills: oldState.skills.concat(skill) }));


    const handleSubmit = async () => {
        for (const field in jobDetails) {
            if(typeof jobDetails[field] == 'string' && !jobDetails[field])
            return;     
         }
         if(!jobDetails.skills.length) return;
        setLoading(true);      
        await props.postJob(jobDetails);
        closeModal();
    }

    const closeModal = () => {
        setJobDetails(initState)
        setLoading(false);
        props.closeModal();

    };


    const classes = useStyles();

    const skills = [
        "UX/UI",
        "React",
        "Node",
        "Docker",
        "Kubernetes",
        "Firebase",
        "MongoDB",
        
    ];

    

    return (
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton onClick={closeModal}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </DialogTitle>
            
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="title"
                        value={jobDetails.title}
                        autoComplete="off"
                        placeholder="Job title *" disableUnderline fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <Select 
                         onChange={handleChange}
                         name="type"
                         value={jobDetails.type}
                         fullWidth disableUnderline variant="filled" >
                            <MenuItem value = "3 Months">3 Months</MenuItem>
                            <MenuItem value = "6 Months">6 Months</MenuItem>
                            <MenuItem value = "9 Months" >9 Months</MenuItem>
                         </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyName"
                        value={jobDetails.companyName}
                        autoComplete="off"
                         placeholder="Company name *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyUrl"
                        value={jobDetails.compnayUrl}
                        autoComplete="off"
                         placeholder="Company Url *" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <Select 
                        onChange={handleChange}
                        name="location"
                        value={jobDetails.location}
                        disableUnderline variant="filled"  fullWidth>
                            <MenuItem value = "Remote">Remote</MenuItem>
                            <MenuItem value = "In-office">In-office</MenuItem>
                
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="link"
                        value={jobDetails.link}
                        autoComplete="off"
                         placeholder="Job Link*" disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={12}>

                        <FilledInput
                        onChange={handleChange}
                        name="description"
                        value={jobDetails.description}
                        autoComplete="off"
                         placeholder="Job Description*" disableUnderline fullWidth multiline rows={4}/>
                    </Grid>

                </Grid>
                <Box mt={2}>
                    <Typography>Skills*</Typography>
                    <Box display="flex">
                        {skills.map((skill) => 
                        <Box onClick={() => addRemoveSkill(skill)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`} key={skill}>
                            {skill}
                        </Box>)}
                    </Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Box alignItems="center" color="red" width="100%" display="flex" justifyContent="space-between">
                    <Typography variant="caption">*Required Fields</Typography>
                    <Button 
                    onClick={handleSubmit} 
                    variant="contained" 
                    disableElevation 
                    color="primary"
                    disable={loading}
                    >
                        {loading ? (<CircularProgress color="secondary" size={22}/> 
                       ) :
                        ("Post Job")

                    }
                        
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}