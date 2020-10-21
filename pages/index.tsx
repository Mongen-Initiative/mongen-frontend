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
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePage, CallToActionButtons } from "../components/templates"
import { MuiTheme } from "../components/MuiTheme"

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 1),
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

export interface Homepage {
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Index() {
  const classes = useStyles()  

  return (
      <NoSsr>
        <BasePage className={classes.rootLight}>
        <title>Mongen Initiative</title>
           {/* Hero unit */}
           <div>
          <Container maxWidth="sm" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
              Visible Children
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
            Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.
            </Typography>
          </Container>
        </div>
        <CallToActionButtons/>
        <Divider />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="child.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      A child
                    </Typography>
                    <Typography>
                      This is a child that needs your help. You can use this section to put some key info about the child.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"  href="/child" style={{color: MuiTheme.palette.primary.dark}}>
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <CallToActionButtons/>
         {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Visible Children
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Transforming the lives of street children and turn their potentials into assets for the society.
        </Typography>
      </footer>
        </BasePage>
      </NoSsr>
  )
}

export default Index
