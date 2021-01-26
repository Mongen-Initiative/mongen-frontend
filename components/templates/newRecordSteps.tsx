import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DisabilitiesController from '../autocomplete/Disabilities'
import FearTraumaController from '../autocomplete/FearsTraumas'
import SkillsAbilitiesController from '../autocomplete/SkillsAbilities'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

type Props = {
  callback?:any
  values?:any
  generalInfo?:any
  academicRecords?:any
  parent?:any
  counsellor?:any
}


export function GeneralInfoStep(props: Props) {
  const { callback } = props
  const [generalInfoData, setGeneralInfoData] = React.useState({
    firstName: '',
    lastName: '',
    birth: '',
    onTheStreet:'no',
    address: '',
    reason: '',
    age: '',
    country_iso: '',
    created: '',
    gender: '',
    height: '',
    street_situation: '',
    updated: '',
    weight: '',
  })
  
  function updateForm(type, data) {
    setGeneralInfoData({ ...generalInfoData, [type]: data })
    callback(generalInfoData);
  }

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
            onChange={(event) => updateForm("firstName", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={(event) => updateForm("lastName", event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dob"
            name="dob"
            label="Date of birth"
            fullWidth
            onChange={(event) => updateForm("birth", event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="street-child" value="yes" onChange={(event) => updateForm("onTheStreet", event.target.value)}
            />}
            label="Street child"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="location"
            name="location"
            label="Current location"
            fullWidth
            onChange={(event) => updateForm("address", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DisabilitiesController/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FearTraumaController/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SkillsAbilitiesController/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="reason-being-on-the-street"
            name="reason-being-on-the-street"
            label="Reason for being on the street"
            fullWidth
            onChange={(event) => updateForm("reason", event.target.value)}
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

export function AcademicRecordsStep(props: Props) {
  const { callback } = props
  const [academicRecordsData, setAcademicRecordsData] = React.useState({
    lastSchool: '',
    lastClass: '',
    depDate: '',
  })
  
  function updateForm(type, data) {
    setAcademicRecordsData({ ...academicRecordsData, [type]: data })
    callback(academicRecordsData);
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Academic Records
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} md={6}>
          <TextField 
            required id="last-school" label="Last school attended" fullWidth
            onChange={(event) => updateForm("lastSchool", event.target.value)}
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <TextField
            required
            id="last-class"
            label="Last class attended"
            fullWidth
            onChange={(event) => updateForm("lastClass", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required id="depDate" label="Departure date" fullWidth
            onChange={(event) => updateForm("depDate", event.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export function ParentStep(props: Props) {
  const { callback } = props
  const [parentData, setParentData] = React.useState({
    parentName: '',
    parentPhone: '',
    parentAddress: '',
  })
  
  function updateForm(type, data) {
    setParentData({ ...parentData, [type]: data })
    callback(parentData);
  }

  return (
      <div>
        <Typography variant="h6" gutterBottom>
          Parent/Ward details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="parent-name" label="Name of parent/ward" fullWidth
              onChange={(event) => updateForm("parentName", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="parent-phone"
              label="Phone number of parent/ward"
              fullWidth
              onChange={(event) => updateForm("parentPhone", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="parent-address" label="Address of parent/ward" fullWidth 
              onChange={(event) => updateForm("parentAddress", event.target.value)}
            />
          </Grid>
        </Grid>
      </div>
  )
}

export function CounsellorStep(props: Props) {
    const { callback } = props
    const [counsellorData, setCounsellorData] = React.useState({
      counsellorName: '',
      timesCounselled: '',
      notes: '',
    })
    
    function updateForm(type, data) {
      setCounsellorData({ ...counsellorData, [type]: data })
      callback(counsellorData);
    }

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Counselor's segment
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="counsellor-name" label="Name of counsellor in charge" fullWidth
              onChange={(event) => updateForm("counsellorName", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="times-counselled"
              label="Times counselled"
              fullWidth
              onChange={(event) => updateForm("timesCounselled", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="counsellor-note" label="Notes about the child"  multiline rows={4} fullWidth
              onChange={(event) => updateForm("notes", event.target.value)}
             />
          </Grid>
        </Grid>
      </div>
    );
}


export function NewRecordSummaryStep(props: Props) {
  const { generalInfo, academicRecords, parent, counsellor } = props
  console.log(generalInfo)
  console.log(academicRecords)
  console.log(parent)
  console.log(counsellor)

  return (
      <div>
        <Typography variant="h6" gutterBottom>
          New record summary
        </Typography>
        <Typography variant="h5" align="center" style={{padding:"15px"}}>{generalInfo.firstName} {generalInfo.lastName}</Typography>
        <List>
          <ListItem>
            <ListItemText>Reason for being on the street:</ListItemText>
            <Typography variant="subtitle1">{generalInfo.reason}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Date of birth:</ListItemText>
            <Typography variant="subtitle1">{generalInfo.birth}</Typography>
          </ListItem>
          <ListItem>
              <ListItemText>Current location:</ListItemText>
              <Typography variant="subtitle1">{generalInfo.address}</Typography>
            </ListItem>
          <ListItem>
            <ListItemText>Last school attended:</ListItemText>
            <Typography variant="subtitle1">{academicRecords.lastSchool} on {academicRecords.depDate}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Ward/Parent name:</ListItemText>
            <Typography variant="subtitle1">{parent.parentName}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Counsellor:</ListItemText>
            <Typography variant="subtitle1">{counsellor.counsellorName}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Counsellor's notes:</ListItemText>
            <Typography variant="subtitle1">{counsellor.notes}</Typography>
          </ListItem>
        </List>
    </div>
  );
}

