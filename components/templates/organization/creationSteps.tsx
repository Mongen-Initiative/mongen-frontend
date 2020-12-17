import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MainContactController from '../../autocomplete/MainContact'
import { List, ListItem, ListItemText } from '@material-ui/core';
import CountriesController from '../../autocomplete/Countries';

export function OrganizationDetailsStep() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Organization details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Organization Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mission"
            name="mission"
            label="Mission"
            multiline={true}
            rows={6}
            rowsMax={10}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="vision"
            name="vision"
            label="Vision"
            multiline={true}
            rows={6}
            rowsMax={10}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}

export function OrganizationLocationStep() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Organization Location
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} md={6}>
          <TextField required id="address" label="Address" fullWidth />
        </Grid>
        <Grid item xs={3} md={3}>
          <CountriesController />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainContactController />
        </Grid>
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
