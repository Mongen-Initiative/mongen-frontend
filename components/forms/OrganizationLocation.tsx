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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Organization Location
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} md={6}>
          <TextField required id="address" label="Address" fullWidth onChange={(event) => updateForm("address", event.target.value)}
            defaultValue={() => getValue("address")}/>
        </Grid>
        <Grid item xs={3} md={3}>
          <CountriesController callback={updateCountry}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
