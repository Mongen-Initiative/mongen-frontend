import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BasePage } from '../components/templates';
import { Container, NoSsr } from '@material-ui/core';
import PaymentAddressStep from '../components/templates/paymentAddressStep';
import PaymentCardStep from '../components/templates/paymentCardStep';
import PaymentSummaryStep from '../components/templates/paymentSummaryStep';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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
    color: theme.palette.secondary.light,
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentAddressStep />;
    case 1:
      return <PaymentCardStep />;
    case 2:
      return <PaymentSummaryStep />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <NoSsr>
      <BasePage className={classes.rootLight}>
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
                  <Typography variant="h5" gutterBottom>
                    Thank you for your contribution.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your donation number is #2001539. We have emailed your order confirmation, and will
                    send you an update on how your contribution was used.
                  </Typography>
                </div>
              ) : (
                <div>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
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
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
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
