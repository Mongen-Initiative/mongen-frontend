import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";

export default function OrganizationNameVisionMission() {
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
            id="seo_name"
            name="seo_name"
            label="SEO Name"
            fullWidth
          />
        </Grid>
        <Typography variant="body2">This is the name for the custom URL for your organization, ex. www.mongen.org/f/SEO_NAME</Typography>
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