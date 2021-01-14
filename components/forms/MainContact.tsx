import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";
import CountriesController from "../autocomplete/Countries";
import UploadFiles from "./FileUpload";

interface MainContactType {
    first_name: string;
    last_name: string;
    country_code: string;
    type_id: number;
    photo_id_url;
    verification_selfie_url;

}


export default function MainContactController() {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
            Main Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mission"
              name="mission"
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={3} md={3}>
            <CountriesController />
          </Grid>
          <Grid item xs={3} md={3}>
            <UploadFiles />
        </Grid>
        </Grid>
      </div>
    );
  }