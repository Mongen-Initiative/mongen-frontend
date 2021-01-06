

import {
    Container,
    Typography,
    NoSsr,
    TextField,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
import { Footer } from "../../components/templates/Footer";
import {DropzoneArea} from 'material-ui-dropzone'

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    textField: {
        width:"60%",
        marginTop:"3%",
        marginLeft:"20%",
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
  }));
  
  const title = "Your title"
  
  function OrgProfile() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight} title={title}>
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
                        dropzoneText="Upload the logo"
                        />
                    </div> 
                <div style={{width:"60%", float: "right"}}>
            <form>
                <TextField id="name" label="Organization name" className={classes.textField} />
                <TextField id="tagline" label="Tagline"className={classes.textField}/>
                <TextField id="mission" label="Your Mission" multiline rowsMax={4} className={classes.textField}/>
                <TextField id="values" label="Your Values" multiline rowsMax={4} className={classes.textField}/>
                <TextField id="story" label="Your Story" multiline rowsMax={4} className={classes.textField}/>
            </form>
            </div>
        </div>
        <Button variant="contained" color="primary" size="large" style = {{marginLeft:"40%", marginTop:"8%", width: "10%"}}> Update </Button>
        </Container>
          </div>
          </BasePage>
        </NoSsr>
    )
  }
  
  export default OrgProfile
