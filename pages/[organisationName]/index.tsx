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
import { BasePage, CallToActionButtons } from "../../components/templates"
import { MuiTheme } from "../../components/MuiTheme"
import { Footer } from "../../components/templates/Footer"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"

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
    color: theme.palette.secondary.light,
  },
}));

export interface Organization {
  id: any
  address: any
  country: any
  name: any
  verified: any
  mission: any
  vision: any
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Index({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles(organization)

  return (
      <NoSsr>
        <BasePage className={classes.rootLight}>
        <title>Mongen Initiative</title>
        {organization ? (
            <div>
              <div>
              <Container maxWidth="sm" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                  Your title {organization.name}
                </Typography>
                <Typography style={{fontSize: "1.8em"}} align="center" color="textSecondary">
                  Information about your organization. You can add/change in your org profile. 
                  Information about your organization. You can add/change in your org profile. 
                  Information about your organization. You can add/change in your org profile.
                </Typography>
              </Container>
              </div>
              <CallToActionButtons/>
              <Divider />
                <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={4}>
                    {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Link href="visible-children/child" underline="none">
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
                              <Button size="small"  href="visible-children/child" style={{color: MuiTheme.palette.primary.main}}>
                                Learn more
                              </Button>
                            </CardActions>
                          </Card>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              <CallToActionButtons/>
              <Footer />
            </div>
        ) : (
          <h1>There is no organization with such name</h1>
        )}
        </BasePage>
      </NoSsr>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { organizationName } = context.query

  const orgReq = await fetch(`http://localhost:8080/api/v1/${organizationName}`, {
    method: "GET",
  })
  const organization: Organization[] = await orgReq.json()

  return {
    props: { organization },
  }
}

export default Index