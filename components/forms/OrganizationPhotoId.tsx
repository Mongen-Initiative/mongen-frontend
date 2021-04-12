import { Typography, Grid } from "@material-ui/core"
import React, { useEffect } from "react"
import { ImageUpload } from "../templates/ImageUpload"

type Props = {
  callback
  values
}

export default function OrganizationPhotoId(props: Props) {

  const { callback, values } = props

  const [orgMedia, setOrgMedia] = React.useState(values);

  function updatePhotoIdUrl(data) {
    setOrgMedia(data)
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
        <Typography variant="subtitle2">Photo ID *:</Typography>
        <Typography variant="body2" style={{marginTop:"10px"}}>Upload a picture of your Passport, National ID, Driver License or any ID your can provide</Typography>
        <Typography variant="body2" style={{marginTop:"10px"}}>We'd need this information to verify your identity. We will not, in any circumstances, share your personal information with other individuals or organizations without your permission. </Typography>
          <div style={{marginTop:"50px", marginLeft:"30%"}}>
              <div style={{marginTop:"20px",  marginLeft:"-20%"}}>
                <ImageUpload callback={updatePhotoIdUrl} values={orgMedia} type="photo_id_url"></ImageUpload>
              </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
