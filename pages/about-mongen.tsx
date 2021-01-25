

import {
    Container,
    Typography,
    NoSsr,
    Link,
    Divider,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePageAboutMongen, AboutMongenCallToActionButtons } from "../components/templates"
  import { AboutMongenFooter } from "../components/templates/Footer"
  
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
      marginTop: "50px",
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
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Mongen | About us</title>
            <div className={classes.content}>
              <Link style={{marginLeft:"7%"}} href={`/`}> &larr; Back to Homepage</Link>
            <Container maxWidth={"md"}>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Who we are
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Mongen Initiative is a volunteering project created by developers:
              Juan Negrier  <span style={{ fontStyle: "italic" }}>(Chile)</span>, Marcelo Negrier <span style={{ fontStyle: "italic" }}>(Chile)</span> and Oleksandra Pishcheiko <span style={{ fontStyle: "italic" }}>(Ukraine)</span>.
               We want to help small charity organizations to have a place, where they can store, access, view their data,
               and share their great missions with the world!
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> What's the idea
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              [TODO] Any small organization can apply, go through the verification process and start using Mongen platform as a website for the organization. 
              Here sponsors can view all the beneficiaries, donate money, check the reports and updates. 
              </Typography>
              <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> How to apply
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              [TODO] Go to  <Link href="/create-organization">Register your interest</Link> page, fill the info about your organization and the details about yourself, so our staff can verify your legitimacy.
              Or just  <Link href="mailto:support@example.com">contact us </Link> directly, we are always happy to help!
              </Typography>
              <AboutMongenCallToActionButtons />
              <Divider />
            </Container>
          </div>
          </BasePageAboutMongen>
           {/* a bit of space between cards and footer */}
           <div style={{marginBottom:"320px"}}></div> 
          <AboutMongenFooter />
        </NoSsr>
    )
  }
  
  export default About
