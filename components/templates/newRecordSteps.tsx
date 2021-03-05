import React from 'react';
import DisabilitiesController from '../autocomplete/Disabilities'
import FearTraumaController from '../autocomplete/FearsTraumas'
import SkillsAbilitiesController from '../autocomplete/SkillsAbilities'
import { List, ListItem, ListItemText, Button, FormControl, FormLabel, RadioGroup, Radio, Grid, Typography, TextField, FormControlLabel, Checkbox } from '@material-ui/core'
import CountriesController from '../autocomplete/Countries';

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
    first_name: '',
    last_name: '',
    date_of_birth: '',
    address: '',
    gender: 'female',
    height: 0,
    weight: 0,
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
  })
  
  function updateForm(type, data) {
    setGeneralInfoData({ ...generalInfoData, [type]: data })
    callback(generalInfoData);
  }

  function updateDate(data) {
    setGeneralInfoData({ ...generalInfoData, ["date_of_birth"]: data })
  }

  function updateCountry(data) {
    updateForm("country", data);
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
            onChange={(event) => updateForm("first_name", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={(event) => updateForm("last_name", event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="street-child" value="true" />}
            label="Street child"
          />
        </Grid>
        <Grid item xs={12}>
          <CountriesController callback={updateCountry} className=""/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            required
            name="address"
            label="Current address"
            fullWidth
            onChange={(event) => updateForm("address", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" style={{marginLeft:"5px", marginTop:"20px", marginBottom:"30px"}}>
            <FormLabel component="legend">Gender *</FormLabel>
            <RadioGroup row name="gender" value={generalInfoData.gender} onChange={(event) => updateForm("gender", event.target.value)}>
              <FormControlLabel value="female" control={<Radio color="default"/>} label="Female" />
              <FormControlLabel value="male" control={<Radio color="default"/>} label="Male" />
              <FormControlLabel value="other" control={<Radio color="default"/>} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{color:"grey", marginBottom:"5px", marginTop:"15px", marginLeft:"50px"}}>Date of birth *</Typography>
          <TextField
            required
            id="dob"
            name="dob"
            type="date"
            onChange={(event) => updateDate(event.target.value)}
            style={{marginLeft:"50px"}}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="weight"
            name="weight"
            label="Weight in kilograms"
            fullWidth
            onChange={(event) => updateForm("weight", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            label="Height in centimeters"
            fullWidth
            onChange={(event) => updateForm("height", event.target.value)}
          />
        </Grid>
        <Button
            variant="contained"
            component="label"
            style = {{margin:"15px", marginTop:"30px"}}
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

  function updateDate(data) {
    setAcademicRecordsData({ ...academicRecordsData, ["depDate"]: data })
    callback(academicRecordsData);
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Academic Records
      </Typography>
      <Grid container spacing={3} style={{marginTop:"30px"}}>
        <Grid item xs={12}>
          <Typography style={{color:"grey", marginTop:"-2px", fontSize:"12px"}}>Departure date *</Typography>
            <TextField 
              required id="depDate"
              type="date"
              onChange={(event) => updateDate(event.target.value)}
              style={{marginBottom:"50px"}}
            />
          </Grid>
        <Grid item xs={3} md={6}>
          <TextField 
            required id="lastSchool" label="Last school attended" fullWidth
            onChange={(event) => updateForm("lastSchool", event.target.value)}
          />
        </Grid>
        <Grid item xs={3} md={6}>
          <TextField
            required
            id="lastClass"
            label="Last class attended"
            fullWidth
            onChange={(event) => updateForm("lastClass", event.target.value)}
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
              required id="parentName" label="Name of parent/ward" fullWidth
              onChange={(event) => updateForm("parentName", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="parentPhone"
              label="Phone number of parent/ward"
              fullWidth
              onChange={(event) => updateForm("parentPhone", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="parentAddress" label="Address of parent/ward" fullWidth 
              onChange={(event) => updateForm("parentAddress", event.target.value)}
              style={{marginBottom:"60px"}}
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
              required id="counsellorName" label="Name of counsellor in charge" fullWidth
              onChange={(event) => updateForm("counsellorName", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="timesCounselled"
              label="Times counselled"
              fullWidth
              onChange={(event) => updateForm("timesCounselled", event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required id="notes" label="Notes about the child"  multiline rows={4} fullWidth
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
        <Typography variant="h5" align="center" style={{padding:"15px"}}>{generalInfo.first_name} {generalInfo.last_name}</Typography>
        <List>
          <ListItem>
            <ListItemText>Reason for being on the street:</ListItemText>
            <Typography variant="subtitle1">{generalInfo.reason}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Date of birth:</ListItemText>
            <Typography variant="subtitle1">{generalInfo.date_of_birth}</Typography>
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

