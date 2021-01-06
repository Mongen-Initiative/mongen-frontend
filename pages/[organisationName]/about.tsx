

import {
    Container,
    Typography,
    NoSsr,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
import { Footer } from "../../components/templates/Footer";
  
  const useStyles = makeStyles((theme) => ({
    content: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    infoText: {
      marginTop: "30px",
      fontWeight:300,
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
  }));
  
  const infoText = "Information about the child. Information about the child. Information about the child. \n Information about the child. Information about the child. Information about the child. Information about the child.  \n Information about the child. Information about the child. Information about the child. Information about the child."
  const title ="Your title"
  const organization = ["123"]

  function About() {
    const classes = useStyles(organization)
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight} title={title}>
          <title>Mongen | About us</title>
          {organization ? (
            <div className={classes.content}>
            <Container>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> About Us
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {infoText}
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Mission
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {infoText}
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Values
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {infoText}
              </Typography>
             <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Story
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {infoText}
              </Typography>
            </Container>
          </div>
          ) : (
            <h1>There is no organization with such name</h1>
          )}
          </BasePage>
          <div style={{marginBottom:"50px"}}></div>
          <Footer />
        </NoSsr>
    )
  }
  
  // export const getServerSideProps: GetServerSideProps = async context => {
  //   const { organizationName } = context.query
  
  //   const orgReq = await fetch(`http://localhost:8080/api/v1/${organizationName}`, {
  //     method: "GET",
  //   })
  //   const organization: Organization[] = await orgReq.json()
  
  //   return {
  //     props: { organization },
  //   }
  // }
  
  export default About
  