import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core';
import MainContactController from '../../forms/MainContact';
import OrganizationNameVisionMission from '../../forms/OrganizationNameVisionMission';
import OrganizationLocation from '../../forms/OrganizationLocation';


export function OrganizationDetailsStep(callback) {
  return (
    <OrganizationNameVisionMission callback={callback}/>
  );
}

export function OrganizationLocationStep(callback) {
  return (
    <OrganizationLocation callback={callback}/>
  );
}

export function MainContactStep(callback) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <MainContactController callback={callback}/>
      </Grid>
    </React.Fragment>
  );
}

export function SummaryStep() {

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Organization Summary
        </Typography>
      <Typography variant="h5" align="center" style={{ padding: "15px" }}>Street Priests</Typography>
      <List>
        <ListItem>
          <ListItemText>Mission</ListItemText>
        </ListItem>
        <ListItem>
          <Typography variant="body1">To create a safe space for street children by providing, a fun and hands-on rehabilitative program that,
engages them in formal education through unconventional ways</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Vision:</ListItemText>
        </ListItem>
        <ListItem>
          <Typography variant="body1">To transform the lives of street children and turn their potentials into assets for the society</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Address:</ListItemText>
          <Typography variant="subtitle1">Some interesting address</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Country:</ListItemText>
          <Typography variant="subtitle1">Nigeria</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Main contact:</ListItemText>
          <Typography variant="subtitle1">James Okina</Typography>
        </ListItem>
      </List>
    </div>
  );
}
