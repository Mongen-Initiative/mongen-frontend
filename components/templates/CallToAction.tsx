import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { MuiTheme } from '../MuiTheme';


export const CallToActionButtons = function() {
    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href="/paymentForm" size="large">
                    Sponsor a child
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href="/about" style={{border:"1px solid", color: MuiTheme.palette.primary.dark}}>
                    How "Your title" works?
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}

export const AboutMongenCallToActionButtons = function() {
    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href="#" size="large">
                    Learn how to create your org website
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href="#" style={{border:"1px solid", color: MuiTheme.palette.primary.dark}}>
                    Contact Us
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}