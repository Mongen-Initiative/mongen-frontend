import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BasePage } from '../../components/templates';
import { Container, NoSsr } from '@material-ui/core';
import {DonationContributorStep, PaymentCardStep, PaymentSummaryStep, RecurringPaymentStep}  from '../../components/templates/donationSteps';
import DonorService from '../../components/services/DonorService';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Organization } from '.';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop:"80px",
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
    padding: theme.spacing(3, 0, 5),
    display:'flex',
    maxWidth:"auto",
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
  rootLight: {
    flexGrow: 1,
    display:"flex",
    color: theme.palette.secondary.light,
    width:"100%",
  },
}));

const steps = ['Your information', 'Payment details', 'Recurring Payment', 'Review your information'];

type DonorInfo = {
  firstName: string
  lastName: string
  address: string
  country: {
    callingCode: string
    countryISO: string
    countryISO3: string
    name: string
  }
}

type PaymentDetails = {
  nameOnCard: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

type RecurringPayment = {
  eachMonth: boolean
}

interface BackendErrors<T> {
  [index: string]: T
}

function Donation({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [donorInformation, setDonorInformation] = React.useState<DonorInfo>({
    firstName: "",
    lastName: "",
    address: "",
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
  })
  const [paymentDetails, setPaymentDetails] = React.useState<PaymentDetails>({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  })
  const [recurringPayment, setRecurringPayment] = React.useState<RecurringPayment>({
    eachMonth: false
  })
  const [endMessageTitle, setEndMessageTitle] = React.useState(
    "Thank you for your contribution."
  );
  const [endMessageSubtitle, setEndMessageSubtitle] = React.useState(
    `We have emailed you a confirmation, and we will
    send you an update on how your contribution is being used.`
  );
  const [validationError, setValidationError] = React.useState(0);

  const handleNext = () => {
    if(activeStep === 0) {
      console.log(donorInformation)
      validateDonorInformation()
    }
    if(activeStep === 1) {
      console.log(paymentDetails)
      validatePaymentDetails()
    }
    if(activeStep === 2) {
      setActiveStep(activeStep + 1)
    }
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1)
      createDonor()
    }
  };

  function validateDonorInformation () {
    if (donorInformation.address === "" ||
    donorInformation.firstName === "" ||
    donorInformation.lastName === "" ||
      Object.keys(donorInformation.country).length === 0) {
        setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validatePaymentDetails () {
    if (paymentDetails.nameOnCard === "" ||
    paymentDetails.cardNumber === "" ||
    paymentDetails.expiryDate === "" ||
    paymentDetails.cvv === "") {
        setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const updateDonorInformation = (data) => {
    setDonorInformation(data);
  }

  const updatePaymentInformation = (data) => {
    setPaymentDetails(data);
  }

  const createDonor = () => {
    console.log(donorInformation)
    DonorService.create({ ...donorInformation, countryIso: donorInformation.country.countryISO, organizationId: organization.id })
        // if there is a validation error on the backend
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            let backend_errors: string = "";
            let errors: BackendErrors<object> = error.response.data
            Object.keys(errors).forEach(key => {
              backend_errors += `${errors[key]}: ${key}\n`
            })
            setEndMessageTitle("There was an error processing your donation. Please go back and fill the required fields:");
            setEndMessageSubtitle(backend_errors);
          }
            console.log(error.config);
        })
        .then((response) => {
          console.log(response);
        });
  };
  
  const title = "Your title"

  return (
    <NoSsr>
      <BasePage className={classes.rootLight} title={title}>
      <title>Mongen | Sponsor a child</title>
        <Container className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" style={{paddingTop:"5px", paddingBottom:"5px"}}>
              Help a child with your donation
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
                  {endMessageTitle.startsWith("There was an error") ? (
                    <div>
                      <Typography variant="h5" gutterBottom>
                        {endMessageTitle}
                      </Typography>
                      <Typography variant="subtitle1">
                        {endMessageSubtitle}
                      </Typography>
                      <Button onClick={handleBack} className={classes.button}  variant="outlined">
                        Back
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Typography variant="h5" gutterBottom>
                        {endMessageTitle}
                      </Typography>
                      <Typography variant="subtitle1">
                        {endMessageSubtitle}
                      </Typography>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {activeStep == 0 ?
                    <DonationContributorStep callback={updateDonorInformation} values={donorInformation}/>
                    :
                    <div></div>
                  }
                  {activeStep === 1 ?
                    <PaymentCardStep callback={updatePaymentInformation} values={paymentDetails} />
                    :
                    <div></div>
                  }
                  {activeStep === 2 ?
                    <RecurringPaymentStep />
                    :
                    <div></div>
                  }
                  {activeStep === 3 ?
                    <PaymentSummaryStep donorData={donorInformation} paymentData={paymentDetails} recurringPayment={recurringPayment} />
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
                      <Button onClick={handleBack} className={classes.button}  variant="outlined">
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Start sponsorship' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
          </Paper>
        </Container>
    </BasePage>
   </NoSsr>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { organizationId} = context.query

  const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}/`, {
    method: "GET",
  })

  const organization: Organization[] = await orgReq.json()

  return {
    props: { organization },
  }
}

export default Donation
