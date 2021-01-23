import {
  Container,
  Typography,
  NoSsr,
  Divider,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePageAboutMongen, AboutMongenCallToActionButtons, MainOrganizationList } from "../components/templates"
import { AboutMongenFooter } from "../components/templates/Footer"

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
  },
}));

export interface Homepage {
}

function Index() {
  const classes = useStyles()
  // TODO: This function looks amazing to be implemented for org creation form
  // const url = convertTitleToSeoUrl(organizations[1])

    return (
      <NoSsr>
        <BasePageAboutMongen className={classes.rootLight}>
          <title>Mongen Initiative</title>
          <div>
            <Container maxWidth="sm" className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                Mongen Initiative
            </Typography>
              <Typography style={{ fontSize: "1.7em", width: "100%" }} align="center" color="textSecondary">
                Mongen Initiative is a volunteering project created by developers:
              Juan Negrier  <span style={{ fontStyle: "italic" }}>(Chile)</span>, Marcelo Negrier <span style={{ fontStyle: "italic" }}>(Chile)</span> and Oleksandra Pishcheiko <span style={{ fontStyle: "italic" }}>(Ukraine)</span>.
               We want to help small charity organizations to have a place, where they can store, access, view their data,
               and share their great missions with the world!
            </Typography>
            </Container>
          </div>
          <AboutMongenCallToActionButtons />
          <Divider />
          <MainOrganizationList/>
          <AboutMongenFooter />
        </BasePageAboutMongen>
      </NoSsr>
    )
  }

export default Index
