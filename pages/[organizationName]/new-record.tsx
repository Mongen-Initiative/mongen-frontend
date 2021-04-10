import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Stepper, Step, StepLabel, Button, Typography, Container, NoSsr } from '@material-ui/core'
import { BasePageAboutMongen } from '../../components/templates'
import {GeneralInfoStep, AcademicRecordsStep, CounsellorStep, NewRecordSummaryStep, ParentStep}  from '../../components/templates/newRecordSteps'
import BeneficiaryService from '../../components/services/BeneficiaryService'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Organization } from '.'


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

function AddNewRecord({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
    generalInfo.weight === 0 ||
    Object.keys(generalInfo.country).length === 0) {
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
    //// beneficiary creation
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1)
      createBeneficiary()
    }
  };

  const createBeneficiary = () => {
    BeneficiaryService.create({ ...generalInfo, ...academicRecords, ...parent, ...counsellor, organization_id: organization.id })
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
        return <GeneralInfoStep callback={updateGeneralInfo} values={generalInfo}/>;
      case 1:
        return <AcademicRecordsStep callback={updateAcademicRecords} values={academicRecords}/>;
      case 2:
        return <ParentStep callback={updateParent} values={parent}/>;
      case 3:
        return <CounsellorStep callback={updateCounsellor} values={counsellor}/>;
      case 4:
        return <NewRecordSummaryStep generalInfo={generalInfo} academicRecords={academicRecords} parent={parent} counsellor={counsellor}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setValidationError(0)
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
                        <div style={{width:"10%", float:"right", marginRight:"30px"}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Add' : 'Next'}
                          </Button>
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
export const getServerSideProps: GetServerSideProps = async context => {
  const { organizationName} = context.query

  const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationName}/`, {
    method: "GET",
  })

  const organization: Organization[] = await orgReq.json()

  return {
    props: { organization },
  }
}

export default AddNewRecord
