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
} from "@material-ui/core"
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePage } from "../components/templates"

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

export interface Projects {
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Index({projects}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles(projects)  

  return (
      <NoSsr>
        <BasePage className={classes.rootLight}>
        <title>Mongen Initiative</title>
           {/* Hero unit */}
           <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Visible Children
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A Global movement of revolutionaries changing the world one street child at a time.
            Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/sponsorForm">
                    Sponsor a child
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    How "Visible Children" works?
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
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
                      This is a clickable information card. You can use this section to put some key info about the child.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="/child">
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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

export const getServerSideProps: GetServerSideProps = async () => {
  // const projectReq = await fetch(`${process.env.mongenCore}/api/v1/projects`, {
  //   method: "GET",
  // })
  // const projects: TestProject[] = await projectReq.json()

  const projects: Projects[] = [
    {
    project_id: 1,
    name: "string",
    project_status: "string",
    data: null
    }
  ]

  return {
    props: { projects },
  }
}

export default Index
