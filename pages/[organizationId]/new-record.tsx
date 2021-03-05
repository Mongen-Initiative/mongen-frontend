import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Stepper, Step, StepLabel, Button, Typography, Container, NoSsr } from '@material-ui/core'
import { BasePageAboutMongen } from '../../components/templates'
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

export default function AddNewRecord() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)
  const [generalInfo, setGeneralInfo] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    address: '',
    gender: 'female',
    height: 0,
    weight: 0,
    country: {
      callingCode: "",
      countryISO: "",
      countryISO3: "",
      name: ""
    },
  })
  const [academicRecords, setAcademicRecords] = useState({
    lastSchool: '',
    lastClass: '',
    depDate: '',
  })
  const [parent, setParent] = useState({
    parentName: '',
    parentPhone: '',
    parentAddress: '',
  })
  const [counsellor, setCounsellor] = useState({
    counsellorName: '',
    timesCounselled: '',
    notes: '',
  })
  const [validationError, setValidationError] = React.useState(0);

  function validateGeneralInfoDetails () {
    if (generalInfo.first_name === "" || 
    generalInfo.last_name === "" ||
    generalInfo.date_of_birth === "" ||
    generalInfo.address === "" ||
    generalInfo.height === 0 ||
    generalInfo.weight === 0) {
      setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validateAcademicRecords () {
    if (academicRecords.lastSchool === "" || 
    academicRecords.lastClass === "" ||
    academicRecords.depDate === "" ) {
      setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validateParentRecords () {
    if (parent.parentName === "" || 
    parent.parentPhone === "" ||
    parent.parentAddress === "" ) {
      setValidationError(1)
    }
    else {
      setValidationError(0)
      setActiveStep(activeStep + 1)
    }
  }

  function validateCounsellorRecords () {
    if (counsellor.counsellorName === "" || 
    counsellor.timesCounselled === "" ||
    counsellor.notes === "" ) {
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
      console.log(generalInfo)
      validateGeneralInfoDetails()
    }
    if(activeStep === 1) {
      console.log(academicRecords)
      validateAcademicRecords()
    }
    if(activeStep === 2) {
      console.log(parent)
      validateParentRecords()
    }
    if(activeStep === 3) {
      console.log(counsellor)
      validateCounsellorRecords()
    }
    //// org creation
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1)
      createBeneficiary()
    }
  };

  const createBeneficiary = () => {
    BeneficiaryService.create({ ...generalInfo, ...academicRecords, ...parent, ...counsellor, organization_id: 10 })
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
       <BasePageAboutMongen className={classes.rootLight}>
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
                            {activeStep === steps.length - 1 ? 'Add' : 'Next'}
                          </Button>
                        </div>
                        {validationError ? (
                          <div style={{width:"50%", float:"right", marginRight:"150px", paddingLeft:"50px", marginTop:"40px"}}>
                            <Typography style={{color:"red"}}>* Please fill in all the required fields</Typography>
                          </div>
                        ): (<></>)}
                      </div>
                    </div>
                </div>
                )}
            </Paper>
          </Container>
      </BasePageAboutMongen>
     </NoSsr>
  );
}
