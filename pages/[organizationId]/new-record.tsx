import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Stepper, Step, StepLabel, Button, Typography, Container, NoSsr } from '@material-ui/core'
import { BasePage } from '../../components/templates'
import {GeneralInfoStep, AcademicRecordsStep, CounsellorStep, NewRecordSummaryStep, ParentStep}  from '../../components/templates/newRecordSteps'
import BeneficiaryService from '../../components/services/BeneficiaryService'


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
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
  rootLight: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
  },
}));

const steps = ['General', 'Academic ', 'Parental/Ward ', "Counselor's ", "Summary "];

const title = "Your title"

export default function AddNewRecord() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)
  const [generalInfo, setGeneralInfo] = useState({})
  const [academicRecords, setAcademicRecords] = useState({})
  const [parent, setParent] = useState({})
  const [counsellor, setCounsellor] = useState({})

  const handleNext = () => {
    setActiveStep(activeStep + 1)
    if (activeStep === steps.length - 1) createBeneficiary()
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const createBeneficiary = () => {
    BeneficiaryService.create({ ...generalInfo, organization_id: 10 })
      .then(
        (response) => {
          console.log(`Beneficiary added! ID: ${response.data.id}`)
        }
      )
      .catch(() => {
        console.log("Something failed ):")
      });
  };

  const updateGeneralInfo = (data) => {
    setGeneralInfo(data);
  }

  const updateAcademicRecords = (data) => {
    setAcademicRecords(data);
  }

  const updateParent = (data) => {
    setParent(data);
  }

  const updateCounsellor = (data) => {
    setCounsellor(data);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <GeneralInfoStep callback={updateGeneralInfo}/>;
      case 1:
        return <AcademicRecordsStep callback={updateAcademicRecords}/>;
      case 2:
        return <ParentStep callback={updateParent}/>;
      case 3:
        return <CounsellorStep callback={updateCounsellor}/>;
      case 4:
        return <NewRecordSummaryStep generalInfo={generalInfo} academicRecords={academicRecords} parent={parent} counsellor={counsellor}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
      <NoSsr>
        <BasePage className={classes.rootLight} title={title} orgId='1'>
        <title>Mongen | Add a new child</title>
          <Container className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center" style={{paddingTop:"5px", paddingBottom:"5px"}}>
                Add a new child
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
                {activeStep === steps.length ? (
                  <div style={{height:"max-content"}}>
                    <Typography variant="h5" gutterBottom>
                      New record is added
                    </Typography>
                    <Typography variant="subtitle1" style={{paddingTop:"50px", paddingLeft:"80px"}}>
                      Thank you for adding a new record. It will appear on your homepage now :)
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    href="/1"
                    style={{marginTop:"60px", marginLeft:"30%", marginBottom:"10px", width:"270px"}}
                  >
                    Go back to the homepage
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="/1/new-record"
                    style={{marginTop:"10px", marginLeft:"30%", marginBottom:"80px", width:"270px"}}
                  >
                    Create another record
                  </Button>
                  </div>
                ) : (
                  <div style={{height:"max-content"}}>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button} variant="outlined">
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Add a record' : 'Next'}
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
