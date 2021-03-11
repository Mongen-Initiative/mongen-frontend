import { Typography, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import OrganizationLogoUpload from "./OrganizationLogoUpload";

type Props = {
  callback
  values
}

export default function OrganizationLogo(props: Props) {

  const { callback, values } = props

  const [orgMedia, setOrgMedia] = React.useState(values);

  function updateLogoUrl(data) {
    setOrgMedia({ ["logo_url"]: data })
  }

  useEffect(() => {
    callback(orgMedia);
  }, [orgMedia])

  return (
    <div style={{ marginBottom: "50px" }}>
      <Typography variant="h6" gutterBottom>
        Organization logo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <OrganizationLogoUpload callback={updateLogoUrl} />
        </Grid>
      </Grid>
    </div>
  )
}
