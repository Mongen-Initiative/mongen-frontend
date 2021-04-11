import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { MuiTheme } from '../MuiTheme';

type Props = {
    organizationName: any
  }

export const CallToActionButtons = function(props: Props) {
    const {organizationName} = props

    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href={`/${organizationName}/payment`} size="large">
                    Donate
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href={`/${organizationName}/about`} style={{border:"1px solid", color: MuiTheme.palette.primary.main}}>
                    Who We are? How we help?
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}

export const CallToActionDonateButton = function(props: Props) {
    const {organizationName} = props

    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href={`/${organizationName}/payment`} size="large">
                    Donate
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
                <Button variant="contained" color="primary" href="/create-organization" size="large">
                Apply to register your interest
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href="/about-mongen" style={{border:"1px solid", color: MuiTheme.palette.primary.main}}>
                    About the initiative
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}

