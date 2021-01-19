import {
    Container,
    Typography,
    NoSsr,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen, convertTitleToSeoUrl } from "../../components/templates"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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

  const title ="Your title"

  function Admin() {
    const classes = useStyles()  
    const url = convertTitleToSeoUrl(title)

    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <Link style={{marginLeft:"7%", color:"#656565"}} href={`/${url}`}> &larr; Back to {title} Homepage</Link>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                    {title} Admin panel
                    </Typography>
                    <div style={{fontSize: "1.5em", paddingTop:"50px", paddingLeft:"15%"}}>
                        <Button  href={`/${url}/orgProfile`} variant="outlined"  style={{width:"60%", marginTop:"3%"}}>
                            View the organization profile
                        </Button>
                    </div>
                    <div style={{fontSize: "1.5em", paddingTop:"10px", paddingLeft:"15%"}}>
                        <Accordion style={{width:"60%", marginTop:"3%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Collaborators</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography> Alex P, Juan N, other great people  </Typography>
                                </AccordionDetails>
                        </Accordion>
                        <Accordion style={{width:"60%", marginTop:"3%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Beneficiaries</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography> Alex P, Juan N, other great people  </Typography>
                                </AccordionDetails>
                        </Accordion>
                        <Accordion style={{width:"60%", marginTop:"3%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Sponsors</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography> Alex P, Juan N, other great people  </Typography>
                                </AccordionDetails>
                        </Accordion>
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default Admin
