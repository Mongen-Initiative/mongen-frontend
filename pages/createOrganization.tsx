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
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePageAboutMongen } from "../components/templates"
import { AboutMongenFooter } from "../components/templates/Footer"
import {MainContactStep, OrganizationDetailsStep, OrganizationLocationStep, SummaryStep}  from '../components/templates/organization/creationSteps';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
}));

const steps = ['Mission and Vision', 'Location', 'Main Contact', 'Summary'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <OrganizationDetailsStep />;
    case 1:
      return <OrganizationLocationStep />;
    case 2:
      return <MainContactStep />;
    case 3:
      return <SummaryStep />;
    default:
      throw new Error('Unknown step');
  }
}

function Index() {
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
        <BasePageAboutMongen className={classes.rootLight}>
        <title>Mongen Initiative</title>
        <Container className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center" style={{paddingTop:"5px", paddingBottom:"5px"}}>
                Add a new organization
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
                      New organization added
                    </Typography>
                    <Typography variant="subtitle1" style={{padding:"10px"}}>
                      Thank you :)
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
                        {activeStep === steps.length - 1 ? 'Create Organization' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
            </Paper>
          </Container>
        <Divider />
          <AboutMongenFooter />
        </BasePageAboutMongen>
      </NoSsr>
  )
}

export default Index
