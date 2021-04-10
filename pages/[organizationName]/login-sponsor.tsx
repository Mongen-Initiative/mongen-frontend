import {
    Container,
    Typography,
    NoSsr,
    Button,
    Paper,
    InputBase,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
  import { AboutMongenFooter } from "../../components/templates/Footer"
  import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { Organization } from "."

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      marginBottom:"200px",
      marginTop:"150px",
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
    button: {
      marginLeft:"100%",
      width:"50%",
      color: theme.palette.primary.main,
    },
  }));
  
  function LoginSponsor({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organization)  
    const url = "1"

    return (
        <NoSsr>
           {organization ? (
            <BasePage className={classes.rootLight} title="123" orgId="1">
                <title>Mongen | Login</title>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography  align="center" color="textPrimary" gutterBottom style={{fontSize:"2.8em"}}>
                    Login as a sponsor
                    </Typography>
                        <div>
                        <Button className={classes.button} href="/login-member">Log in as org member</Button>
                        <Button className={classes.button} href="/-admin">Log in as an admin</Button>
                        </div>
                        <Paper component="form" style={{width: "60%", padding: '12px 14px',  marginLeft:"23%",  alignItems: 'center', display: 'flex'}}> 
                            <InputBase placeholder="Username" style={{flex: "1"}} />
                        </Paper>
                        <Paper component="form" style={{width: "60%", padding: '12px 14px', marginTop:"20px", marginLeft:"23%", marginBottom:"30px", alignItems: 'center', display: 'flex'}}> 
                            <InputBase placeholder="Password" style={{flex: "1"}} />
                        </Paper>
                        <Button href={`/${url}/sponsor`} variant="outlined"  color="primary" style={{width:"30%", display:"block", marginLeft:"36%", marginTop:"40px", paddingLeft:"10%"}} size="large" >Sign In</Button>
                        <Button style={{display:"block", marginLeft:"22%", marginTop:"40px"}} href="mailto:support@example.com">Don't have an account yet? Contact us</Button>
                </Container>
                <AboutMongenFooter />
            </BasePage>
            ) : (
              <h1>There is no organization with such name</h1>
            )}
        </NoSsr>
    )
  }
  
  export const getServerSideProps: GetServerSideProps = async context => {
    const { organizationName} = context.query
  
    const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationName}/`, {
      method: "GET",
    })
  
    const organization: Organization[] = await orgReq.json()
  
    return {
      props: { organization },
    }
  }
  
  export default LoginSponsor
