

import {
    Container,
    Typography,
    NoSsr,
    Card,
    CardMedia,
    CardContent,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
import { Footer } from "../../components/templates/Footer"
import { MuiTheme } from "../../components/MuiTheme"

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      width: "100%",
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width: "100%",
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
    rootLight: {
      flexGrow: 1,
      display:"flex",
      color: theme.palette.secondary.light,
    },
    buttons: {
      marginTop:"8%",
      width: "100%",
    },
  }));
 
  const children = [1, 2];
  const title = "Your title"
  const sponsor = ["123"]

  function SponsorProfile() {
    const classes = useStyles(sponsor)
    const url = "1"

    return (
        <NoSsr>
          <BasePage className={classes.rootLight} title={title} orgId='1'>
          <title>Mongen | Sponsor's profile</title>
          {sponsor ? (
            <div className={classes.heroContent}>
              <Container>
                <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "15px", fontWeight:300}}> Hello, hero!
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph style={{fontStyle:"italic"}}>
                Thank you for your contributions, you are doing a great job! 
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph >
                You can review the reports and other info about your contributions on this page
                </Typography>
                  <div>
                  {children.map((child) => (
                  <div style={{width:"30%", float: "left", marginTop:"10%", marginLeft: "10%"}} key={child}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="/child.jpg"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                      <Button href="#" variant="contained" color="primary" size="large" className={classes.buttons}> Check how you helped this month</Button>
                      <Button href="#" variant="contained" size="large" color="primary" className={classes.buttons}> Check full report </Button>
                      <Button href="#" variant="contained" color="primary" size="large" className={classes.buttons}> Change notification settings </Button>
                      <Button href={`/${url}/child`} variant="outlined" size="large" className={classes.buttons} style = {{border:"1px solid", color: MuiTheme.palette.primary.main}}> Read about the child </Button>
                      </CardContent>
                    </Card>
                  </div> 
                  ))}
                  </div>
              </Container>
            </div>
             ) : (
              <h1>Sorry, we can't display the info about your donations now. Come back later, we are working hard to fix the issue!</h1>
              )}
          </BasePage>
        {/* a bit of space between cards and footer */}
          <div style={{marginBottom:"250px"}}></div> 
          <Footer orgName={title} orgMission={title} />
        </NoSsr>
    )
  }
  
  // export const getServerSideProps: GetServerSideProps = async context => {
  //   const { sponsorId } = context.query
  
  //   const sponsorReq = await fetch(`${process.env.mongenCore}/api/v1/${sponsorId}`, {
  //     method: "GET",
  //   })
  //   const sponsor: Sponsor[] = await sponsorReq.json()
  
  //   return {
  //     props: { sponsor },
  //   }
  // }
  
  export default SponsorProfile
