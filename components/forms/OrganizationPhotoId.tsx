import { Typography, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import PhotoIDUpload from "./PhotoIDUpload";

type Props = {
  callback
  values
}

export default function OrganizationPhotoId(props: Props) {

  const { callback, values } = props

  const [orgMedia, setOrgMedia] = React.useState(values);

  function updatePhotoIdUrl(data) {
    setOrgMedia({ ["photo_id_url"]: data })
  }

  useEffect(()=>{
    callback(orgMedia);
  }, [orgMedia])

  return (
    <div style={{marginBottom:"50px"}}>
      <Typography variant="h6" gutterBottom>
        Photo ID of organization main contact
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{marginTop:"20px"}}>
          <PhotoIDUpload callback={updatePhotoIdUrl} />
        </Grid>
      </Grid>
    </div>
  )
}
