import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, List, ListItem, ListItemText, Button } from '@material-ui/core';

export function GeneralInfoStep() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        General information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dob"
            name="dob"
            label="Date of birth"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="street-child" value="yes" />}
            label="Street child"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="location"
            name="location"
            label="Location on the street"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="disability"
            name="disability"
            label="Disability if any"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="trauma" name="trauma" label="Fear/Trauma" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="skill"
            name="skill"
            label="Special skill, Ability"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reason-being-on-the-street"
            name="reason-being-on-the-street"
            label="Reason for being on the street"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Button
            variant="contained"
            component="label"
            style = {{margin:"15px"}}
        >
        Upload Child's photo
        <input
            type="file"
            style={{ display: "none" }}
        />
        </Button>
      </Grid>
    </div>
  );
}

export function AcademicRecordsStep() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Records
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} md={6}>
          <TextField required id="last-school" label="Last school attended" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField
            required
            id="last-school"
            label="Las't class"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="depDate" label="Departure date" fullWidth autoComplete="cc-exp" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export function ParentStep() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Parent/Ward details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField required id="parent-name" label="Name of parent/ward" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="parent-phone"
              label="Phone number of parent/ward"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="parent-address" label="Address of parent/ward" fullWidth autoComplete="cc-exp" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  export function CounsellorStep() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Counsellor's segment
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField required id="counsellor-name" label="Name of counsellor in charge" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="times-counselled"
              label="Times counselled"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="counsellor-note" label="Remark about the child" fullWidth autoComplete="cc-exp" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }


export function NewRecordSummaryStep() {

  return (
      <div>
        <Typography variant="h6" gutterBottom>
          New record summary
        </Typography>
        <Typography variant="h5" align="center" style={{padding:"15px"}}>Child 1</Typography>
        <List>
            <ListItem>
              <ListItemText>Fear:</ListItemText>
              <Typography variant="subtitle1">Loneliness</Typography>
            </ListItem>
          <ListItem>
          <ListItemText>Date of birth:</ListItemText>
            <Typography variant="subtitle1">03/08/2005</Typography>
          </ListItem>
          <ListItem>
          <ListItemText>Ward name:</ListItemText>
            <Typography variant="subtitle1">John Smith</Typography>
          </ListItem>
          <ListItem>
          <ListItemText>Counsellor's notes:</ListItemText>
            <Typography variant="subtitle1">Needs another appointment</Typography>
          </ListItem>
        </List>
    </div>
  );
}

