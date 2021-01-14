import {
    Container,
    Typography,
    NoSsr,
    Link,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen } from "../../components/templates";

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 1, 1),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    rootLight: {
      flexGrow: 1,
    },
  }));
  
  function Admin() {
    const classes = useStyles()  
    
    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <Link style={{marginLeft:"7%", color:"#656565"}} href="/"> &larr; Back to Mongen Homepage</Link>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                    Admin panel
                    </Typography>
                    <div style={{fontSize: "1.5em", paddingTop:"50px", paddingLeft:"15%"}}>
                        -{" "} {" "} {" "}
                        <Link href="/admin/pending-organizations">
                            View the list of organizations pending review
                        </Link>
                    </div>
                    <div style={{fontSize: "1.5em", paddingTop:"10px", paddingLeft:"15%"}}>
                        -{" "} {" "} {" "}
                        <Link href="/admin/all-organizations">
                            View the list of all organizations
                        </Link>
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default Admin
  