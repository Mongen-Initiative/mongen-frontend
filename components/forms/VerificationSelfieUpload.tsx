import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Typography, Button, withStyles, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Component } from 'react';
import UploadService from '../services/UploadService';

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

interface filesParams {
    selectedFiles: any,
    currentFile: any,
    progress: number,
    message: string,
    file_id: number,
    name: string,
    isError: boolean
  }

export default class VerificationSelfieUpload extends Component<{}, filesParams> {

    constructor(props) {
      super(props);

      this.state = {
        selectedFiles: undefined,
        currentFile: undefined,
        progress: 0,
        message: "",
        file_id: 0,
        name: "",
        isError: false,
      };
    }

    upload = () => {
        let currentFile = this.state.selectedFiles[0];
    
        this.setState({
          progress: 0,
          currentFile: currentFile,
        });
    
        UploadService.upload(currentFile, (event) => {
          this.setState({
            progress: Math.round((100 * event.loaded) / event.total),
          });
        })
          .then((response) => {
            this.setState({
              message: response.data.message,
              file_id: response.data.file_id,
              name: response.data.name,
              isError: false
            });
          })
          .catch(() => {
            this.setState({
              progress: 0,
              message: "Could not upload the file!",
              currentFile: undefined,
              isError: true
            });
          });
    
        this.setState({
          selectedFiles: undefined,
        });
    }

    selectFile = (event) => {
        this.setState({
        selectedFiles: event.target.files,
        });
    }

    componentDidMount() {
        // UploadService.getFile().then((response) => {
        // this.setState({
        //     fileInfos: response.data,
        // });
        // });
    }

    render() {
        const {
        selectedFiles,
        currentFile,
        progress,
        message,
        isError,
        file_id,
        name
        } = this.state;
        
        return (
          <div>
            <Typography variant="subtitle2">Verification Selfie:</Typography>
            <Typography variant="body2">Please take a picture of yourself while holding your ID, this is to ensure your identity</Typography>
          
            <div className="mg20">
                {currentFile && (
                <Box className="mb25" display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                    <BorderLinearProgress variant="determinate" value={progress} />
                    </Box>
                    <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
                    </Box>
                </Box>)
                }

                <label htmlFor="btn-upload">
                <input
                    id="btn-upload"
                    name="btn-upload"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={this.selectFile} />
                <Button
                    className="btn-choose"
                    variant="outlined"
                    component="span" >
                    Choose File
                </Button>
                </label>
                <div className="file-name">
                {selectedFiles && selectedFiles.length > 0 ? selectedFiles[0].name : null}
                </div>
                <Button
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                disabled={!selectedFiles}
                onClick={this.upload}>
                Upload
                </Button>

                <Typography variant="subtitle2" className={`upload-message ${isError ? "error" : ""}`}>
                {message}
                </Typography>

                <Typography variant="h6" className="list-header">
                Uploaded file
                </Typography>
                <ul className="list-group">
                {file_id != 0 && name != ""?
                        <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={name}
                            height="140"
                            image={`http://localhost:9090/api/v1/get_file/${file_id}`}
                            title={name}
                          />
                        </CardActionArea>
                      </Card>
                    :
                    <div></div>
                    }
                </ul>
              </div>
            </div>
        );
    }
}
