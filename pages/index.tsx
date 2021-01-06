import {
  Container,
  Grid,
  Typography,
  NoSsr,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePageAboutMongen, AboutMongenCallToActionButtons, convertTitleToSeoUrl } from "../components/templates"
import { MuiTheme } from "../components/MuiTheme"
import { AboutMongenFooter } from "../components/templates/Footer"

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 1, 1),
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
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  rootLight: {
    flexGrow: 1,
  },
}));

export interface Homepage {
}

const organizations = ["Visible Children", "Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5"]

function Index() {
  const classes = useStyles()  
  const url = convertTitleToSeoUrl(organizations[1])
  
  return (
      <NoSsr>
        <BasePageAboutMongen className={classes.rootLight}>
        <title>Mongen Initiative</title>
           <div>
          <Container maxWidth="sm" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
            Mongen Initiative
            </Typography>
            <Typography style={{fontSize: "1.7em", width:"100%"}} align="center" color="textSecondary">
               Mongen Initiative is a volunteering project created by developers: 
              Juan Negrier  <span style={{fontStyle:"italic"}}>(Chile)</span>, Marcelo Negrier <span style={{fontStyle:"italic"}}>(Chile)</span> and Oleksandra Pishcheiko <span style={{fontStyle:"italic"}}>(Ukraine)</span>. 
               We want to help small charity organizations to have a place, where they can store, access, view their data, 
               and share their great missions with the world!
            </Typography>
          </Container>
        </div>
        <AboutMongenCallToActionButtons/>
        <Divider />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {organizations.map((org) => (
              <Grid item key={org} xs={12} sm={6} md={4}>
                <Link href={`/${url}`} underline="none">
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="charity.jpg"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {org}
                      </Typography>
                      <Typography>
                        This Organization works with us. Click to view their website
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={`/${url}`} style={{color: MuiTheme.palette.primary.main}}>
                        Learn more
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
          <AboutMongenFooter />
        </BasePageAboutMongen>
      </NoSsr>
  )
}

export default Index
