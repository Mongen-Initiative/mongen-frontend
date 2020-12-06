

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
      width: "100%"
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: "100%"
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
  }));
 
  const cards = [1, 2];
    
  function SponsorProfile() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen | Sponsor's profile</title>
            <div className={classes.heroContent}>
              <Container>
                <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "15px", fontWeight:300}}> Hello, hero!
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Thank you for your contributions, you are doing a great job!
                </Typography>
                  <div>
                    <div >
                      <Typography  variant="h4" align="center" color="textPrimary" gutterBottom style={{marginTop: "5%", fontWeight:300}}> Your donations: </Typography>
                  </div>
                  {cards.map((card) => (
                  <div style={{width:"30%", float: "left", marginTop:"10%", marginLeft: "10%"}} key={card}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="child.jpg"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                      <Button variant="contained" color="primary" size="large" style = {{marginTop:"8%", width: "100%"}}> Check how you helped this month</Button>
                      <Button variant="contained" size="large" color="primary" style = {{marginTop:"8%", width: "100%"}}> Check full report </Button>
                      <Button variant="contained" color="primary" size="large" style = {{marginTop:"8%", width: "100%"}}> Check donation reminders </Button>
                      <Button variant="outlined" size="large" style = {{marginTop:"8%", width: "100%", border:"1px solid", color: MuiTheme.palette.primary.dark}}> Read about the child </Button>
                      </CardContent>
                    </Card>
                  </div> 
                  ))}
                  </div>
              </Container>
            </div>
          </BasePage>
          <Footer/>
        </NoSsr>
    )
  }
  
  export default SponsorProfile
