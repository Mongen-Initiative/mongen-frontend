

import {
    Container,
    Typography,
    NoSsr,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
import { Footer } from "../../components/templates/Footer"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { Organization } from "."
  
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
  
  function About({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organization)

    return (
        <NoSsr>
          {organization ? (
            <BasePage className={classes.rootLight} title={organization.name} orgId={organization.id}>
              <title>{organization.name} | About us</title>
              <div className={classes.content}>
                <Container>
                  <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> About Us
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  {organization.tagline}
                  </Typography>
                  <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Mission
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {organization.mission}
                  </Typography>
                  <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Values
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {organization.vision}
                  </Typography>
                <Typography  variant="h3" align="center" color="textPrimary" gutterBottom className={classes.infoText}> Our Story
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  {organization.story}
                  </Typography>
                </Container>
              </div>
             {/* a bit of space between cards and footer */}
             <div style={{marginBottom:"200px"}}></div> 
                <Footer orgName={organization.name} orgMission={organization.mission}/>         
            </BasePage>
          ) : (
            <h1>There is no organization with such name</h1>
          )}
        </NoSsr>
    )
  }
  
  export const getServerSideProps: GetServerSideProps = async context => {
    const { organizationId} = context.query
  
    const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}/`, {
      method: "GET",
    })
  
    const organization: Organization[] = await orgReq.json()
  
    return {
      props: { organization },
    }
  }
  
  export default About
  