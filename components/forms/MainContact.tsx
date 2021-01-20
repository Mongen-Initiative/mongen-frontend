import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";
import CountriesController from "../autocomplete/Countries";
import PhotoIDUpload from "./PhotoIDUpload";


type Props = {
  callback
}

interface MainContactType {
  first_name: string;
  last_name: string;
  country_code: string;
  type_id: number;
  photo_id_url;
  verification_selfie_url;

}


export default function MainContactController(props: Props) {

  const { callback } = props

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Main Contact Information
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField
            required
            id="name"
            name="name"
            label="First Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            required
            id="mission"
            name="mission"
            label="Last Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle2">Nationality:</Typography>
          <CountriesController />
        </Grid>
        <Grid item xs={10}>
          <PhotoIDUpload />
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