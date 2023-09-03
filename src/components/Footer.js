import React from 'react';
import {Grid} from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

// Function that returns the footer section
const Footer =() =>{
    return(
        
        
        <Grid container justifyContent='center' p={2}>
            <Grid item>
                <a href='https://www.linkedin.com/in/niranjan-rajendran-1b1b3b1b1/' target='_blank' rel="noreferrer">
                    <LinkedIn sx={{fontSize:'3rem'}} />
                </a>
            </Grid>
            <Grid item>
                <a href='https://www.github.com/NIrajan-15' target='_blank' rel="noreferrer">
                    <GitHub sx={{color:'black',fontSize:'3rem'}}  />
                </a>
            </Grid>
        </Grid>

                    

    );
}


// export function footer to access it in other files
export default Footer;