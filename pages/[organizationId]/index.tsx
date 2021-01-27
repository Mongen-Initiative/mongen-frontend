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
import { BasePage, CallToActionButtons, convertTitleToSeoUrl } from "../../components/templates"
import { MuiTheme } from "../../components/MuiTheme"
import { Footer } from "../../components/templates/Footer"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

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
  id: number
  address: string
  country: any
  name: string
  verified: any
  mission: string
  vision: string
  seoName: string
}
export interface Children {
  id: any
}
export interface Sponsor {
  id: any
}

const children = ["Child 1", "Child 2", "Child 3", "Child 4", "Child 5", "Child 6", "Child 7", "Child 8", "Child 9"];

function Index({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles(organization)
  const url = convertTitleToSeoUrl("123")

  return (
      <NoSsr>
        {organization ? (
          <BasePage className={classes.rootLight} title={organization.name} orgId={organization.id}>
          <title>Mongen Initiative</title>
              <div>
                <div>
                <Container maxWidth="sm" className={classes.heroContent}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                    {organization.name}
                  </Typography>
                  <Typography style={{fontSize: "1.8em"}} align="center" color="textSecondary">
                  {organization.mission}
                  </Typography>
                </Container>
                </div>
                <CallToActionButtons orgId={organization.id}/>
                <Divider />
                  <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                      {children.map((child) => (
                        <Grid item key={child} xs={12} sm={6} md={4}>
                          <Link href={`/${url}/child`} underline="none">
                            <Card className={classes.card}>
                              <CardMedia
                                className={classes.cardMedia}
                                image="child.jpg"
                                title="Image title"
                              />
                              <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {child}
                                </Typography>
                                <Typography>
                                  This is a child that needs your help. You can use this section to put some key info about the child.
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small"  href={`/${organization.id}/child`} style={{color: MuiTheme.palette.primary.main}}>
                                  Learn more
                                </Button>
                              </CardActions>
                            </Card>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                  <CallToActionButtons orgId={organization.id}/>
                <Footer orgName={organization.name} orgMission={organization.mission} />
              </div>
          
          </BasePage>
      ) : (
        <h1>There is no organization with such name</h1>
      )}
      </NoSsr>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { organizationId} = context.query
  
  console.log(`#### CHECKING ORGANIZATION ENDPOINT ####`);
  console.log(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}`);

  const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}`, {
    method: "GET",
  })

  const organization: Organization[] = await orgReq.json()

  return {
    props: { organization },
  }
}

export default Index
