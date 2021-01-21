import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";

type Props = {
  callback
  values
}

export default function OrganizationNameVisionMission(props: Props) {
  const { callback, values } = props

  const [orgData, setOrgData] = React.useState({
    name: '',
    seo_name: '',
    mission: '',
    vision: '',
  });
  

  function updateForm(type, data) {
        setOrgData({ ...orgData, [type]: data })
        callback(orgData);
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
        Organization details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Organization Name"
            onChange={(event) => updateForm("name", event.target.value)}
            defaultValue={() => getValue("name")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="seo_name"
            name="seo_name"
            label="SEO Name"
            onChange={(event) => updateForm("seo_name", event.target.value)}
            defaultValue={() => getValue("seo_name")}
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
            onChange={(event) => updateForm("mission", event.target.value)}
            defaultValue={() => getValue("mission")}
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
            onChange={(event) => updateForm("vision", event.target.value)}
            defaultValue={() => getValue("vision")}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}