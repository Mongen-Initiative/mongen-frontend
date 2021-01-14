import {
    Container,
    Typography,
    NoSsr,
    Link,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen } from "../../components/templates";
import OrgReviewModal from "../../components/templates/OrgReviewModal";

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
  
  function PendingOrganizations() {
    const classes = useStyles()  
    const organizations = ["Visible Children", "Organization 1", "Organization 2", "Organization 3", "Organization 4", "Organization 5"]

    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <Link style={{marginLeft:"7%"}} href="/admin"> &larr; Back to Admin Panel</Link>
                <Container  className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                        Pending review queue
                    </Typography>
                    <div style={{paddingTop:"50px", paddingLeft:"18%"}}>
                        {organizations.map((org) => (
                            <div style={{fontSize: "1.5em", paddingTop:"10px", paddingLeft:"15%"}} key={org}>
                                <OrgReviewModal org={org}></OrgReviewModal>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default PendingOrganizations
