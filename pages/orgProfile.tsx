

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
          <title>Mongen | About us</title>
             {/* Hero unit */}
             <div className={classes.heroContent}>
            <Container>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "15px", fontWeight:300}}> About Us
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We’re on a mission to address the societal challenge of street children.
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "55px", fontWeight:300}}> Our Mission
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Information about your organization. Information about your organization. Information about your organization. Information about your organization.
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "55px", fontWeight:300}}> Our Values
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Information about your organization. Information about your organization. Information about your organization. Information about your organization.
              Information about your organization. Information about your organization. Information about your organization. Information about your organization.
             </Typography>
             <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "55px", fontWeight:300}}> Our Story
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
  
  export default OrgProfile
