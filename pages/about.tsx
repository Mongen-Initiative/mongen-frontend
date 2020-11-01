

import {
    Container,
    Typography,
    NoSsr,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../components/templates"
import { Footer } from "../components/templates/Footer";
  
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    infoText: {
      marginTop: "15px",
      fontWeight:300,
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
  }));
  
    
  function About() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen | About us</title>
             {/* Hero unit */}
             <div className={classes.heroContent}>
            <Container>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> About Us
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We’re on a mission to address the societal challenge of street children.
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Mission
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Information about your organization. Information about your organization. Information about your organization. Information about your organization.
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Values
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Information about your organization. Information about your organization. Information about your organization. Information about your organization.
              Information about your organization. Information about your organization. Information about your organization. Information about your organization.
             </Typography>
             <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Story
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Information about your organization. Information about your organization. Information about your organization. Information about your organization. 
              Information about your organization. Information about your organization. Information about your organization. Information about your organization. 
              Information about your organization. Information about your organization. Information about your organization. Information about your organization.              
            </Typography>
            </Container>
          </div>
          </BasePage>
          <Footer />
        </NoSsr>
    )
  }
  
  export default About
