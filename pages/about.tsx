

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
  
    
  function About() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen | About us</title>
             {/* Hero unit */}
             <div className={classes.heroContent}>
            <Container>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{marginTop: "5px"}}> About Us
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We’re on a mission to address the societal challenge of street children.
              </Typography>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingTop: "15px"}}> Our Mission
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.              </Typography><Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingTop: "15px"}}> Our Values
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.              </Typography><Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingTop: "15px"}}> Our Story
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.
Street Priests is a youth‐led non‐governmental organization with a vision to be the foremost at addressing
the societal challenge of street children and actively advocate for indigent children all over the world with special concentration in Africa,
to rehabilitate, mentor, engage and equip ‘all positively’ children on the streets and have their potentials turned into assets for the society.              </Typography>
            </Container>
          </div>
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
  
  export default About
