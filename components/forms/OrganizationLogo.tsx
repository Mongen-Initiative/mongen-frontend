import { Typography, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import OrganizationLogoUpload from "./OrganizationLogoUpload";

type Props = {
  callback
}

export default function OrganizationLogo(props: Props) {

  const { callback } = props

  const [orgMedia, setOrgMedia] = React.useState("");

  function updateLogoUrl(data) {
    setOrgMedia(data)
  }

  useEffect(() => {
    callback(orgMedia);
  }, [orgMedia])

  return (
    <div style={{ marginBottom: "50px" }}>
      <Typography variant="h6" gutterBottom color="secondary">
        Organization logo *
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <OrganizationLogoUpload callback={updateLogoUrl} />
        </Grid>
      </Grid>
    </div>
  )
}
