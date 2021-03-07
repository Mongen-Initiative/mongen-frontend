import { Typography, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import PhotoIDUpload from "./PhotoIDUpload";
import OrganizationLogoUpload from "./OrganizationLogoUpload";

type Props = {
  callback
  values
}

export default function OrganizationMedia(props: Props) {

  const { callback, values } = props

  const [orgMedia, setOrgMedia] = React.useState(values);

  function updatePhotoIdUrl(data) {
    setOrgMedia({ ["photo_id_url"]: data, ["logo_url"]: orgMedia.logo_url })
  }

  function updateLogoUrl(data) {
    setOrgMedia({ ["logo_url"]: data, ["photo_id_url"]: orgMedia.photo_id_url })
  }

  useEffect(()=>{
    callback(orgMedia);
  }, [orgMedia])

  return (
    <div style={{marginBottom:"50px"}}>
      <Typography variant="h6" gutterBottom>
        Organization Media files
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{marginTop:"20px"}}>
          <PhotoIDUpload callback={updatePhotoIdUrl} />
        </Grid>
        <Grid item xs={12}>
          <OrganizationLogoUpload callback={updateLogoUrl} />
        </Grid>
      </Grid>
    </div>
  )
}
