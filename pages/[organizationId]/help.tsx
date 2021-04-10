import {
    Container,
    Typography,
    NoSsr,
    Link,
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
  
  function Help({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organization)

    return (
        <NoSsr>
          {organization ? (
            <BasePage className={classes.rootLight} title={organization.name} orgId={organization.id}>
              <title>{organization.name} | How to help</title>
              <div className={classes.content}>
                <Container>
                  <Typography  variant="h3" align="center" color="primary" gutterBottom className={classes.infoText}> Thank you for your desire to help. Changing the world is easy with the team effort!
                  </Typography>
                  <Typography variant="h4" align="center" color="textSecondary" style={{marginTop:"200px", marginBottom:"50px"}}>
                    Ways you can support us:
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                   -  <Link href={`/${organization.id}/payment`}>Donate to the organization or choose a specific child to support</Link> 
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph >
                   - Subscribe to our newsletter on the homepage
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph >
                  - Share our details on your social media page
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph >
                  -  Volunteer your time, we have lots to enhance in our organization and need enthusiasts!
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
  
  export default Help
  