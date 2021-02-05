import { Typography, Grid, TextField } from "@material-ui/core";
import React from "react";
import CountriesController from "../autocomplete/Countries";

type Props = {
  callback
  values
}

export default function OrganizationLocation(props: Props) {

  const { callback, values } = props

  const [orgLocation, setOrgLocation] = React.useState({
    address: '',
    country: {},
  });

  function updateForm(type, data) {
    setOrgLocation({ ...orgLocation, [type]: data })
    callback(orgLocation);
}

function updateCountry(data){
  updateForm("country", data);
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
    <div style={{marginBottom:"50px"}}>
      <Typography variant="h6" gutterBottom>
        Organization Location and Social Networks
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}  style={{marginTop:"40px"}}>
          <CountriesController callback={updateCountry}/>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required 
            id="address"
            label="Enter the address of your main office"
            fullWidth
            onChange={(event) => updateForm("address", event.target.value)}
            style={{marginTop:"20px"}}
            defaultValue={() => getValue("address")}
          />
        </Grid>
      </Grid>
    </div>
  )
}
