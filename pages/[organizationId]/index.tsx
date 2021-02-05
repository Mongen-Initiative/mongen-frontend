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
  Paper,
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
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(4),
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
  aliceCarousel: {
    position: "relative",
    width: "100%",
    margin: "auto",
    direction: "ltr",
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
                <Paper elevation={0} style={{marginTop:"60px", marginBottom:"300px"}}>
                   {/* image on the left */}
                   <div>
                    <Paper elevation={0} style={{width:"50%", opacity:"0.8", position: "relative", textAlign: "center", color: "white", marginTop:"-50px", marginBottom:"280px"}}>
                      <img src="childrenBig.jpg" style={{width:"100%"}}></img>
                      <Typography component="h2" variant="h3" align="center" style={{ marginTop: "-45%", left: "20%", fontWeight:"bolder", textShadow: "black 0.1em 0.1em 0.2em", fontSize:60}}>
                        {organization.name}
                      </Typography>
                      <Paper elevation={0} style={{position: "absolute", height: "100%", overflowY: "auto", overflowX: "hidden", left:"100%",  boxSizing: "border-box", width:"100%", marginTop:"-50px"}}>
                        {/* text on the right */}
                        <Typography style={{fontSize: "1.8em",  paddingLeft:"15px", paddingRight:"15px"}} align="center" >
                          {/* {organization.tagline} */}
                          Saving children all around Africa
                        </Typography>
                      </Paper>
                    </Paper>
                    </div>
                </Paper>
                <CallToActionButtons orgId={organization.id}/>
                <div style={{marginTop:"90px"}} >
                  <Paper elevation={3} style={{height:"350px", backgroundColor:MuiTheme.palette.primary.main, opacity:"0.9"}}>
                    <div>
                      <Typography variant="h2" align="center" style={{color:"white", paddingTop:"40px", textShadow: "black 0.1em 0.1em 0.2em"}}>Who we are</Typography>
                      <Typography align="center" style={{color:"white", marginTop:"30px", marginLeft:"10%", marginRight:"10%", textShadow: "black 0.1em 0.1em 0.2em"}}>
                        text texttext text text text text text text text text text text text 
                        text texttext text text text text text text text text text text
                        text texttext text text text text text text text text text text
                        text texttext text text text text text text text text text text 
                      </Typography>
                      <Button variant="outlined" size="large" href={`/${organization.id}/about`} style={{color: MuiTheme.palette.primary.main, backgroundColor:"#edf2ea", marginTop:"5%", marginLeft:"45%"}}>
                        Read More
                      </Button>
                    </div>
                  </Paper>
                  <Divider />
                </div>                           
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

  const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}/`, {
    method: "GET",
  })

  const organization: Organization[] = await orgReq.json()

  return {
    props: { organization },
  }
}

export default Index
