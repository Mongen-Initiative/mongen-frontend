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
  import { BasePageAboutMongen } from "../components/templates"
  import { AboutMongenFooter } from "../components/templates/Footer"
  
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 1, 1),
      marginBottom:"200px"
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
    
  function LoginOrgMember() {
    const classes = useStyles()  
    const url = "1"

    return (
        <NoSsr>
            <BasePageAboutMongen className={classes.rootLight}>
                <title>Mongen | Login</title>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography  align="center" color="textPrimary" gutterBottom style={{fontSize:"2.8em"}}>
                    Login as an org member
                    </Typography>
                        <div>
                        <Button className={classes.button} href="/login-admin">Log in as an administrator</Button>
                        <Button className={classes.button} href={`/1/login-sponsor`}>Log in as a sponsor</Button>
                        </div>
                        <Paper component="form" style={{width: "60%", padding: '12px 14px',  marginLeft:"23%",  alignItems: 'center', display: 'flex'}}> 
                            <InputBase placeholder="Username" style={{flex: "1"}} />
                        </Paper>
                        <Paper component="form" style={{width: "60%", padding: '12px 14px', marginTop:"20px", marginLeft:"23%", marginBottom:"30px", alignItems: 'center', display: 'flex'}}> 
                            <InputBase placeholder="Password" style={{flex: "1"}} />
                        </Paper>
                        <Button href={`/${url}/new-record`} variant="outlined"  color="primary" style={{width:"30%", display:"block", marginLeft:"36%", marginTop:"40px", paddingLeft:"10%"}} size="large" >Sign In</Button>
                        <Button style={{display:"block", marginLeft:"22%", marginTop:"40px"}} href="mailto:support@example.com">Don't have an account yet? Contact us</Button>
                </Container>
                <AboutMongenFooter />
            </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default LoginOrgMember
 