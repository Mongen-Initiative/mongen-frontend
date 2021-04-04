import { Typography, Grid, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import CountriesController from "../autocomplete/Countries";

type Props = {
  callback
  values
}

export default function OrganizationLocation(props: Props) {

  const { callback, values } = props

  const [orgLocation, setOrgLocation] = React.useState(values);

  function updateForm(type, data) {
    setOrgLocation({ ...orgLocation, [type]: data })
  }

  function updateCountry(data) {
    setOrgLocation({ ...orgLocation, ["country"]: data })
  }

  useEffect(()=>{
    callback(orgLocation);
  }, [orgLocation])

  return (
    <div style={{marginBottom:"50px"}}>
      <Typography variant="h6" gutterBottom>
        Organization Location and Main Social Network
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}  style={{marginTop:"40px"}}>
          <CountriesController callback={updateCountry} className="" defaultValue={orgLocation.country}/>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required 
            id="address"
            label="Enter the address of your main office"
            fullWidth
            onChange={(event) => updateForm("address", event.target.value)}
            style={{marginTop:"20px"}}
            defaultValue={values.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="social_network_url"
            label="Enter the URL of your main social network"
            fullWidth
            onChange={(event) => updateForm("social_network_url", event.target.value)}
            style={{marginTop:"20px"}}
            defaultValue={values.social_network_url}
          />
        </Grid>
      </Grid>
    </div>
  )
}
