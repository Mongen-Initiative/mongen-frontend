import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";
import CountriesController from "../autocomplete/Countries";

export default function OrganizationLocation() {
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
      </Grid>
    </React.Fragment>
  );
}