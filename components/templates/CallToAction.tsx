import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { MuiTheme } from '../MuiTheme';

type Props = {
    title: string
  }

export const CallToActionButtons = function(props: Props) {
    const { title } = props
    return (
    <div style={{margin: "60px"}}>
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" href="/visible-children/paymentForm" size="large">
                    Sponsor a child
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href="/visible-children/about" style={{border:"1px solid", color: MuiTheme.palette.primary.main}}>
                    How "{title}" works?
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
                <Button variant="contained" color="primary" href="mailto:support@example.com" size="large">
                Send Us A Request
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" href="/loginOrgMember" style={{border:"1px solid", color: MuiTheme.palette.primary.main}}>
                    Login to your org profile
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" href="/createOrganization" size="large">
                Add your organization
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}
