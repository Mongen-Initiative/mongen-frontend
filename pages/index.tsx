import {
  Container,
  Typography,
  NoSsr,
  Divider,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState, useEffect } from "react"
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

  const [width, setWindowWidth] = useState(0)
  useEffect(() => { 
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
   return () => 
     window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  const screenWidth = {
    isDesktop: width > 1023,
  }

  const responsive = {
    fontSize: screenWidth.isDesktop ? '1.7em': '1.5em',
    width: screenWidth.isDesktop ? '100%': '90%',
  }

    return (
      <NoSsr>
        <BasePageAboutMongen className={classes.rootLight}>
          <title>Mongen Initiative</title>
          <div>
            <Container maxWidth="sm" className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                Mongen Initiative
            </Typography>
              <Typography style={{ fontSize: responsive.fontSize, width: responsive.width, paddingLeft:"5%" }} align="center" color="textSecondary">
                Mongen Initiative is a volunteering project created by developers:
              Juan Negrier  <span style={{ fontStyle: "italic" }}>(Chile)</span>, Marcelo Negrier <span style={{ fontStyle: "italic" }}>(Chile)</span> and Oleksandra Pishcheiko <span style={{ fontStyle: "italic" }}>(Ukraine)</span>.
               We want to help small charity organizations to have a place, where they can store, access, view their data,
               and share their great missions with the world!
            </Typography>
            </Container>
          </div>
          <AboutMongenCallToActionButtons />
          <Divider />
          {/* all verified organizations */}
          <MainOrganizationList/>
          <AboutMongenFooter />
        </BasePageAboutMongen>
      </NoSsr>
    )
  }

export default Index
