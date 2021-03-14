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
import OrganizationPhotoId from "../components/forms/OrganizationPhotoId"
import OrganizationLocation from "../components/forms/OrganizationLocation"
import OrganizationNameVisionMission from "../components/forms/OrganizationNameVisionMission"
import OrganizationSummary from "../components/forms/OrganizationSummary"
import MainContactService from "../components/services/MainContactService"
import OrganizationService from "../components/services/OrganizationService"
import { BasePageAboutMongen } from "../components/templates"
import { AboutMongenFooter } from "../components/templates/Footer"
// import OrganizationLogo from "../components/forms/OrganizationLogo"

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

const steps = ['Mission and Vision', 'Location and Social Network', 'Contact info', 'Photo ID', 'Summary'];

type MissionVisionLogo = {
  name: string,
  seo_name: string,
  mission: string,
  vision: string,
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
  country: {
    callingCode: string
    countryISO: string
    countryISO3: string
    name: string
  }
  email: string
}

type PhotoId = {
  photo_id_url: string
}

interface BackendErrors<T> {
  [index: string]: T
}

function Index() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [organizationDetails, setOrganizationDetails] = React.useState<MissionVisionLogo>({
    name: "",
    seo_name: "",
    mission: "",
    vision: "",
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
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
    email: ""
  })

  const [photoId, setPhotoId] = React.useState<PhotoId>({
    photo_id_url: "",
  })

  const [validationError, setValidationError] = React.useState(0);

  const [endMessage, setEndMessage] = React.useState(
    "We will check the information your provided and contact you for further steps. Thank you :)"
  );

  function validateOrganizationDetails () {
    if (organizationDetails.name === "" || 
    organizationDetails.mission === "" || 
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
      Object.keys(mainContact.country).length === 0) {
        setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validatePhotoId () {
      if (photoId.photo_id_url === ""){
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
    if(activeStep === 3) {
      console.log(photoId)
      validatePhotoId()
    }
    //// org creation
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1)
      createOrganization()
    }
  };

  const createOrganization = () => {
    console.log(mainContact)
    MainContactService.create({ ...mainContact, country_iso: mainContact.country.countryISO, type: "Administrator", photo_id_url: photoId.photo_id_url })
      .then((response) => {
        return OrganizationService.create({ ...organizationDetails, ...organizationLocationSocialNetworks, country_iso: organizationLocationSocialNetworks.country.countryISO, contact_id: response.data.id })
        // if there is a validation error on the backend
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            let backend_errors: string = "There was an error creating your organization. Please go back and fill the required fields: \n\n";
            let errors: BackendErrors<object> = error.response.data
            Object.keys(errors).forEach(key => {
              backend_errors += `${errors[key]}: ${key}\n`
            })
            setEndMessage(backend_errors);
          }
            console.log(error.config);
        });
      })
      .then(
        (response) => {
          if(response === "undefined") console.log("Organization is not created!")
          else console.log(`Organization created! ID: ${response.id}`)
        })
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

  const updatePhotoId = (data) => {
    setPhotoId(data);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setValidationError(0)
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
                  {/* Last step: error message with back button, if there is a backend error. Or success message, if all good */}
                  {endMessage.startsWith("There was an error") ? (
                    <div>
                      <Typography style={{marginTop:"80px", fontSize:"17px", whiteSpace:"pre-wrap", color:"red"}}>
                        {endMessage}
                      </Typography>
                      <Button onClick={handleBack} className={classes.button} variant="outlined">
                        Back
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Typography style={{marginTop:"80px", fontSize:"17px", whiteSpace:"pre-wrap"}}>
                        {endMessage}
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
                  )}
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
                      <OrganizationPhotoId callback={updatePhotoId} values={photoId} />
                      :
                      <div></div>
                    }
                    {activeStep === 4 ?
                      <OrganizationSummary organizationDetails={organizationDetails} organizationLocation={organizationLocationSocialNetworks} mainContact={mainContact} />
                      :
                      <div></div>
                    }
                    <div className={classes.buttons}>
                    {validationError ? (
                          <div style={{width:"50%", float:"left", marginRight:"100px", paddingLeft:"70px", marginTop:"50px"}}>
                            <Typography style={{color:"red"}}>* Please fill in all the required fields</Typography>
                          </div>
                        ): (<></>)}
                     {activeStep !== 0 && (
                       <div style={{width:"10%", float:"right", marginRight:"70px"}}>
                        <Button onClick={handleBack} className={classes.button} variant="outlined">
                          Back
                        </Button>
                        </div>
                      )}
                        <div style={{width:"10%", float:"right"}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Apply' : 'Next'}
                          </Button>
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
