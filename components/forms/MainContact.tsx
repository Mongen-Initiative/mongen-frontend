import { Typography, Grid, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import CountriesController from "../autocomplete/Countries";
import PhotoIDUpload from "./PhotoIDUpload";

type Props = {
  callback
  values
}

export default function MainContactController(props: Props) {

  const { callback, values } = props

  const [orgData, setOrgData] = React.useState({
    first_name: '',
    last_name: '',
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
    photo_id_url: '',
    email: '',
  });


  function updateForm(type, data) {
    setOrgData({ ...orgData, [type]: data })
  }

  function updateCountry(data) {
    updateForm("country", data);
  }

  function updatePhotoIdUrl(data) {
    updateForm("photo_id_url", data);
  }

  function getValue(type) {
    if (values) {
      if (type in values) {
        return values[type]
      }
    }
    return ""
  }

  useEffect(()=>{
    callback(orgData);
  }, [orgData])

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Typography style={{marginTop:"7px", marginLeft:"2%",fontSize:"13px", fontStyle:"italic"}}>
          We'd need this information to verify your identity
        </Typography>
        <Grid item xs={12}>
          <TextField
            required
            id="first_name"
            name="first_name"
            label="Enter your first name"
            onChange={(event) => updateForm("first_name", event.target.value)}
            defaultValue={() => getValue("first_name")}
            fullWidth
            style={{marginTop:"20px"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="last_name"
            name="last_name"
            label="Enter your last name"
            onChange={(event) => updateForm("last_name", event.target.value)}
            defaultValue={() => getValue("last_name")}
            fullWidth
            style={{marginTop:"20px"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Enter your email, so we can contact you"
            onChange={(event) => updateForm("email", event.target.value)}
            defaultValue={() => getValue("email")}
            fullWidth
            style={{marginTop:"20px"}}
          />
        </Grid>
        <Grid item xs={12} style={{marginTop:"20px"}}>
          <Typography variant="subtitle2" style={{marginBottom:"10px"}}>Nationality *:</Typography>
          <CountriesController callback={updateCountry} className =""/>
        </Grid>
        <Grid item xs={12} style={{marginTop:"20px"}}>
          <PhotoIDUpload callback={updatePhotoIdUrl} />
        </Grid>
        {/*
          Need to discuss if this layer will be needed or not
          <Grid item xs={10}>
            <VerificationSelfieUpload/>
          </Grid> */}
      </Grid>
    </div>
  );
}
