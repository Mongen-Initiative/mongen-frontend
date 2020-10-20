import {
    Container,
    Grid,
    Typography,
    NoSsr,
    Button,
    Card,
    CardMedia,
    CardContent,
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
  
  export interface Children {
  }
    
  function Child({children}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(children)  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen Initiative</title>
             {/* Hero unit */}
             <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Child 1
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Info about the child
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
          <Container className={classes.cardGrid}>
            {/* End hero unit */}
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="child.jpg"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        Info about the child
                      </Typography>
                    </CardContent>
                  </Card>
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
  
    const children: Children[] = [
      {
      project_id: 1,
      name: "string",
      project_status: "string",
      data: null
      }
    ]
  
    return {
      props: { children },
    }
  }
  
  export default Child
  