import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { MuiTheme } from '../MuiTheme';
import { convertTitleToSeoUrl } from './BasePage';

type Props = {
    title: string
  }

export const CallToActionButtons = function(props: Props) {
    const { title } = props
    const url = convertTitleToSeoUrl(title)

    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href={`/${url}/paymentForm`} size="large">
                    Sponsor a child
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href={`/${url}/about`} style={{border:"1px solid", color: MuiTheme.palette.primary.main}}>
                    Who We are? How we help?
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

