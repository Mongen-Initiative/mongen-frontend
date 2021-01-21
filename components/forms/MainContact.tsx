import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";
import CountriesController from "../autocomplete/Countries";
import PhotoIDUpload from "./PhotoIDUpload";


type Props = {
  callback
  values
}

// interface MainContactType {
//   first_name: string;
//   last_name: string;
//   country_code: string;
//   type_id: number;
//   photo_id_url;
//   verification_selfie_url;

// }


export default function MainContactController(props: Props) {

  const { callback, values } = props

  const [orgData, setOrgData] = React.useState({
    first_name: '',
    last_name: '',
    country: {},
    photo_id_url: '',
  });
  

  function updateForm(type, data) {
        setOrgData({ ...orgData, [type]: data })
        callback(orgData);
  }

  function updateCountry(data){
    updateForm("country", data);
  }

  function updatePhotoIdUrl(data){
    updateForm("photo_id_url", data);
  }

  function getValue(type) {
      if (values){
        if (type in values){
          return values[type]
        }
      }
      return ""
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Main Contact Information
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField
            required
            id="first_name"
            name="first_name"
            label="First Name"
            onChange={(event) => updateForm("first_name", event.target.value)}
            defaultValue={() => getValue("first_name")}
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            required
            id="last_name"
            name="last_name"
            label="Last Name"
            onChange={(event) => updateForm("last_name", event.target.value)}
            defaultValue={() => getValue("last_name")}
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2">Nationality:</Typography>
          <CountriesController callback={updateCountry}/>
        </Grid>
        <Grid item xs={10}>
          <PhotoIDUpload callback={updatePhotoIdUrl}/>
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