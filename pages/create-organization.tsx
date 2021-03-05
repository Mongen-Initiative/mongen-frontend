import {
  Container,
  Typography,
  NoSsr,
  Button,
  Divider,
  Stepper,
  Paper,
  StepLabel,
  Step,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import MainContactController from "../components/forms/MainContact"
import OrganizationLocation from "../components/forms/OrganizationLocation"
import OrganizationNameVisionMission from "../components/forms/OrganizationNameVisionMission"
import OrganizationSummary from "../components/forms/OrganizationSummary"
import MainContactService from "../components/services/MainContactService"
import OrganizationService from "../components/services/OrganizationService"
import { BasePageAboutMongen } from "../components/templates"
import { AboutMongenFooter } from "../components/templates/Footer"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
  rootLight: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(5, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(5),
  },
}));

const steps = ['Mission and Vision', 'Location and Social Network', 'Contact info', 'Summary'];

type MissionVisionLogo = {
  name: string,
  seo_name: string,
  mission: string,
  vision: string,
  logo_url: string,
  story: string
}

// type SocialNetworks = {
//   name: string
//   network_name: string
//   url: string
// }

type OrganizationAddress = {
  address: string
  country: {
    callingCode: string
    countryISO: string
    countryISO3: string
    name: string
  }
  // social_networks: SocialNetworks[]
  social_network_url: string
}

type MainContact = {
  first_name: string
  last_name: string
  photo_id_url: string
  country: {
    callingCode: string
    countryISO: string
    countryISO3: string
    name: string
  }
  email: string
}

function Index() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [organizationDetails, setOrganizationDetails] = React.useState<MissionVisionLogo>({
    name: "",
    seo_name: "",
    mission: "",
    vision: "",
    logo_url: "",
    story: ""
  })
  const [organizationLocationSocialNetworks, setOrganizationLocationSocialNetworks] = React.useState<OrganizationAddress>({
    address: "",
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
    social_network_url: ""
  })
  const [mainContact, setMainContact] = React.useState<MainContact>({
    first_name: "",
    last_name: "",
    photo_id_url: "",
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
    email: ""
  })

  const [validationError, setValidationError] = React.useState(0);

  function validateOrganizationDetails () {
    if (organizationDetails.name === "" || 
    organizationDetails.mission === "" || 
    // organizationDetails.logo_url === "" ||  //TODO: figure out how to handle this validation
    organizationDetails.vision === "" || 
    organizationDetails.story === "") {
      setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validateSocialDetails () {
    if (organizationLocationSocialNetworks.address === "" || 
      organizationLocationSocialNetworks.social_network_url === "" ||
      Object.keys(organizationLocationSocialNetworks.country).length === 0) {
        setValidationError(1)
    } 
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validateMainContactDetails () {
    if (mainContact.first_name === "" || 
      mainContact.last_name === "" ||
      mainContact.email === "" ||
      // mainContact.photo_id_url === "" || //TODO: figure out how to handle this validation
      Object.keys(mainContact.country).length === 0) {
        setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  const handleNext = () => {
    //// form validation
    if(activeStep === 0) {
      console.log(organizationDetails)
      validateOrganizationDetails()
    }
    if(activeStep === 1) {
      console.log(organizationLocationSocialNetworks)
      validateSocialDetails()
    }
    if(activeStep === 2) {
      console.log(mainContact)
      validateMainContactDetails()
    }
    //// org creation
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1)
      createOrganization()
    }
  };

  const createOrganization = () => {
    console.log(mainContact)
    MainContactService.create({ ...mainContact, country_iso: mainContact.country.countryISO, type: "Administrator" })
      .then((response) => {
        return OrganizationService.create({ ...organizationDetails, ...organizationLocationSocialNetworks, country_iso: organizationLocationSocialNetworks.country.countryISO, contact_id: response.data.id })
      })
      .then(
        (response) => {
          console.log(`Organization created! ID: ${response.data.id}`)
        }
      )
      .catch(() => {
        console.log("Something failed ):")
      });
  };

  const updateOrganizationDetails = (data) => {
    setOrganizationDetails(data);
  }

  const updateOrganizationLocationAndSocialNetworks = (data) => {
    setOrganizationLocationSocialNetworks(data);
  }

  const updateMainContact = (data) => {
    setMainContact(data);
  }


  return (
    <NoSsr>
      <BasePageAboutMongen className={classes.rootLight}>
        <title>Mongen Initiative</title>
        <div className={classes.content}>
          <Link style={{marginLeft:"7%"}} href={`/`}> &larr; Back to Homepage</Link>
          <Container className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                Register your interest
                </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <div>
                  <Typography style={{marginTop:"80px", fontSize:"17px"}}>
                    We will check the information your provided and contact you for further steps. Thank you :)
                      </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/"
                    style={{marginTop:"60px", marginLeft:"33%", marginBottom:"80px"}}
                  >
                    Go back to the homepage
                  </Button>
                </div>
              ) : (
                  <div style={{height:"max-content"}}>
                    {activeStep == 0 ?
                      <OrganizationNameVisionMission callback={updateOrganizationDetails} values={organizationDetails}/>
                      :
                      <div></div>
                    }
                    {activeStep === 1 ?
                      <OrganizationLocation callback={updateOrganizationLocationAndSocialNetworks} values={organizationLocationSocialNetworks} />
                      :
                      <div></div>
                    }
                    {activeStep === 2 ?
                      <MainContactController callback={updateMainContact} values={mainContact} />
                      :
                      <div></div>
                    }
                    {activeStep === 3 ?
                      <OrganizationSummary organizationDetails={organizationDetails} organizationLocation={organizationLocationSocialNetworks} mainContact={mainContact} />
                      :
                      <div></div>
                    }
                    <div className={classes.buttons}>
                    {/* TODO: back button logic needs to be implemented */}
                      {/* {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button} variant="outlined">
                          Back
                        </Button>
                      )} */}
                      <div>
                        <div style={{width:"10%", float:"right", marginRight:"70px"}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                            style={{ }}
                          >
                            {activeStep === steps.length - 1 ? 'Apply' : 'Next'}
                          </Button>
                        </div>
                        {validationError ? (
                          <div style={{width:"50%", float:"right", marginRight:"200px", paddingLeft:"70px"}}>
                            <Typography style={{color:"red"}}>* Please fill in all the required fields</Typography>
                          </div>
                        ): (<></>)}
                      </div>
                    </div>
                  </div>
              )}
            </Paper>
          </Container> 
          <Divider />
        </div>
        <AboutMongenFooter />
      </BasePageAboutMongen>
    </NoSsr>
  )
}

export default Index
