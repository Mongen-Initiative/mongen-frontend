import { Typography, Grid, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { convertTitleToSeoUrl } from "../templates/BasePage";

type Props = {
  callback
  values
}

export default function OrganizationNameVisionMission(props: Props) {
  const { callback, values } = props

  const [orgData, setOrgData] = React.useState(values)
  
  function updateForm(type, data) {
    setOrgData({ ...orgData, [type]: data })
  }

  function updateNameAndSeoLink(data) {
    setOrgData({ ...orgData, ["name"]: data, ["seo_name"]: convertTitleToSeoUrl(data) })
  }

  useEffect(()=>{
    callback(orgData);
  }, [orgData])

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Organization details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <TextField
            required
            id="name"
            name="name"
            label="Enter the Organization name"
            onChange={(event) => updateNameAndSeoLink(event.target.value)}
            defaultValue={values.name}
            fullWidth
            style={{marginTop:"20px"}}
          />
            <Typography  style={{marginTop:"5px", fontSize:"12px"}}>
              Note that the url for your site will be generated from the name you enter. E.g., organization is called "Saving Children", so the link to your page would be  {" "}
              <span style={{fontStyle:"italic"}}>/saving-children</span>
            </Typography>
        </Grid>
        <Grid item xs={11}>
          <TextField
            required
            id="story"
            name="story"
            label="Please tell us your story"
            multiline={true}
            rows={6}
            rowsMax={6}
            onChange={(event) => updateForm("story", event.target.value)}
            defaultValue={values.story}
            fullWidth
            style={{marginTop:"5px"}}
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            required
            id="mission"
            name="mission"
            label="Tell us the organization's mission and values"
            multiline={true}
            rows={6}
            rowsMax={6}
            onChange={(event) => updateForm("mission", event.target.value)}
            defaultValue={values.mission}
            fullWidth
            style={{marginTop:"10px"}}
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            required
            id="vision"
            name="vision"
            label="Tell us the organization's vision: big plan or milestone you are moving towards"
            multiline={true}
            rows={6}
            rowsMax={6}
            onChange={(event) => updateForm("vision", event.target.value)}
            defaultValue={values.vision}
            fullWidth
            style={{marginTop:"10px"}}
          />
        </Grid>
      </Grid>
    </div>
  );
}
