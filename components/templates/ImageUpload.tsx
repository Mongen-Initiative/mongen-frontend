import React, { useEffect } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone'
import UploadService from '../services/UploadService';

type Props = {
    callback
    values
    type: string
  }

export const ImageUpload = function(props: Props) {
    const {callback, values, type } = props
    const [modal, setOpenModal] = React.useState(false);
    const [orgData, setOrgData] = React.useState(values);

    function getUrl() {
        // the type can be an org logo or a photo id url
        if(type==="logoUrl") return orgData.logoUrl
        if(type==="photo_id_url") return orgData.photo_id_url
        else return ""
    }

    function updateImage(data) {
        setOrgData({ ...orgData, [type]: data })
    }

    function submitImageToMediaService(file) {
        console.log('File uploaded:', file);
        setOpenModal(false);
        UploadService.upload(file, "100")
          .then(
            (response) => {
                updateImage(`${process.env.mongenMedia}/api/v1/get_file/${response.data.file_id}`)
            }
          )
          .catch(() => {
            console.log("Something failed ):")
          })
    }

    useEffect(() => {
        callback(orgData);
    }, [orgData])

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setOpenModal(true)} style={{marginTop:"30px", marginLeft:"20%"}}>
                Upload
            </Button>
            <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    open={modal}
                    filesLimit={1}
                    onClose={() => {
                    setOpenModal(false)
                    }}
                    onSave={(files) => {
                    submitImageToMediaService(files[0])
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
            />
            <div>
                {getUrl() ? (
                    <Paper style={{width:"max-content", height:"max-content",  marginTop:"30px"}} elevation={3}>
                        <img src={`${getUrl()}`} style={{width:"533px", height:"300px"}}></img>
                    </Paper>
                ): ( 
                    <Typography style={{marginLeft:"15%", marginTop:"30px"}}>No image uploaded yet</Typography>
                )}
            </div>
        </div>
  )
}
