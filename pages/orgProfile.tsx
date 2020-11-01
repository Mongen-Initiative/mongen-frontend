

import {
    Container,
    Typography,
    NoSsr,
    TextField,
    Button,
    Grid,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../components/templates"
import { Footer } from "../components/templates/Footer";
import {DropzoneArea} from 'material-ui-dropzone'

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
  }));
  
    
  function OrgProfile() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen | Organization profile </title>
             {/* Hero unit */}
             <div className={classes.heroContent}>
            <Container>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "15px", fontWeight:300}}> Organization profile
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
              On this page you can enter information related to your Organization, it will be displayed throughout the site.
              </Typography>
                <div>
                    <div style={{width:"30%", float: "left", marginTop:"5%", marginLeft: "5%"}}>
                        <DropzoneArea
                        acceptedFiles={['image/*']}
                        onChange={(files) => console.log('Files:', files)}
                        dropzoneText="Upload organization logo"
                        />
                    </div> 
                <div style={{width:"60%", float: "right"}}>
            <form>
                <TextField id="name" label="Organization name" style={{width:"60%", marginTop:"3%", marginLeft:"20%"}} />
                <TextField id="tagline" label="Tagline about organization" style={{width:"60%", marginTop:"3%", marginLeft:"20%"}}/>
                <TextField id="mission" label="Your Mission" multiline rowsMax={4} style={{width:"60%", marginTop:"3%", marginLeft:"20%"}}/>
                <TextField id="values" label="Your Values" multiline rowsMax={4}  style={{width:"60%", marginTop:"3%", marginLeft:"20%"}}/>
                <TextField id="story" label="Your Story" multiline rowsMax={4} style={{width:"60%", marginTop:"3%", marginLeft:"20%", marginBottom:"4%",}}/>
            </form>
            </div>
        </div>
        <Button variant="contained" color="primary" size="large" style = {{marginLeft:"40%", marginTop:"4%", width: "10%"}}> Update </Button>
        </Container>
          </div>
          </BasePage>
          <Footer />
        </NoSsr>
    )
  }
  
  export default OrgProfile
