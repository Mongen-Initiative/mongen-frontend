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
  
  function Organizations() {
    const classes = useStyles()  
    const organizations = ["Visible Children", "Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5"]

    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <Link style={{marginLeft:"7%"}} href="/admin"> &larr; Back to Admin Panel</Link>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                        All organizations
                    </Typography>
                    <div style={{paddingTop:"50px"}}>
                        {organizations.map((org) => (
                            <div style={{fontSize: "1.5em", paddingTop:"10px", paddingLeft:"15%"}} key={org}>
                                -{" "} {" "} {" "}
                                <Link href="#" style={{color:"#656565"}}>
                                    {org}
                                </Link>
                                <Link style={{paddingLeft:"30%", color:"red"}} href="#">Remove</Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default Organizations
 