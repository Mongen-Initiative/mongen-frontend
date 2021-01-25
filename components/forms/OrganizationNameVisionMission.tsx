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
            label="Enter the Organization name"
            onChange={(event) => updateForm("name", event.target.value)}
            defaultValue={() => getValue("name")}
            fullWidth
            style={{marginTop:"20px"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="seo_name"
            name="seo_name"
            label="Enter organization name, how you want it to be displayed in the url"
            onChange={(event) => updateForm("seo_name", event.target.value)}
            defaultValue={() => getValue("seo_name")}
            fullWidth
            style={{marginTop:"10px"}}
          />
            <Typography  style={{marginTop:"5px", fontSize:"12px"}}>
              E.g, organization is called "Saving Children", please enter "saving-children", so the link to your page would be  {" "}
              <span style={{fontStyle:"italic"}}>/saving-children</span>
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="vision"
            name="vision"
            label="Please tell us your story"
            multiline={true}
            rows={6}
            rowsMax={6}
            onChange={(event) => updateForm("vision", event.target.value)}
            defaultValue={() => getValue("vision")}
            fullWidth
            style={{marginTop:"5px"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mission"
            name="mission"
            label="Tell us the organization's mission and values"
            multiline={true}
            rows={6}
            rowsMax={6}
            onChange={(event) => updateForm("mission", event.target.value)}
            defaultValue={() => getValue("mission")}
            fullWidth
            style={{marginTop:"10px"}}
          />
        </Grid>
      </Grid>
    </div>
  );
}
