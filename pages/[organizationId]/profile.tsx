

import {
    Container,
    Typography,
    NoSsr,
    TextField,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePageAboutMongen } from "../../components/templates"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { Organization } from "."
import OrganizationService from "../../components/services/OrganizationService"
import CountriesController from "../../components/autocomplete/Countries"
import OrganizationLogo from "../../components/forms/OrganizationLogo"

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    textField: {
        width:"60%",
        marginTop:"3%",
        marginLeft:"20%",
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
  }));
  
  
  function Profile({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organization)
    const [orgData, setOrgData] = React.useState({
      address: organization.address,
      country:  {
        callingCode: "374",
        countryISO: "AM",
        countryISO3: "ARM",
        name: organization.country
      },
      logoUrl: organization.logo_url,
      main_contact: {
        countryCollaborator: {
          callingCode: "",
          countryISO: "",
          countryISO3: "",
          name: organization.country
        },
        email: organization.main_contact.email,
        firstName: organization.main_contact.first_name,
        id: organization.main_contact.id,
        lastName: organization.main_contact.last_name, 
        photoIdURL: organization.main_contact.photo_id_url,
        type: {
          id: 1,
          name: "Administrator                                                                                                                                                                                                                                                  "
        }
      },
      mission: organization.mission,
      name: organization.name,
      seoName: organization.seo_name,
      socialNetworkUrl: organization.social_network_url,
      status: {
        id: 1,
        name: organization.status
      },
      story: organization.story,
      vision: organization.vision,
      tagline: organization.tagline,
    });
    const [validationError, setValidationError] = React.useState(0);
    const [page, setPage] = React.useState(1);

    function updateForm(type, data) {
      setOrgData({ ...orgData, [type]: data })
    }
    
    function updateCountry(data) {
      updateForm("country", data);
    }

    function updateLogo(data) {
      updateForm("logoUrl", data);
    }

    function handleNext() {
      if (orgData.name === "" || 
        orgData.tagline === "" || 
        orgData.mission === "" || 
        orgData.vision === "" || 
        orgData.story === "" ||
        orgData.socialNetworkUrl === "" ||
        orgData.main_contact.firstName === ""){
        setValidationError(1)
      }
      else {
        setValidationError(0)
        setPage(page+1)
        if(page===2) updateOrganization()
      }
    }

    const handleBack = () => {
      setPage(page - 1);
      setValidationError(0)
    }

    const updateOrganization = () => {
      console.log(orgData)
      OrganizationService.update(orgData)
      .then(
          (response) => {
            console.log(`Organization is updated! ID: ${response.data.id}`)
          }
        )
        .catch(() => {
          console.log("Something failed ):")
        });
    };
  
    return (
        <NoSsr>
          {organization ? (
            <BasePageAboutMongen className={classes.rootLight} title={organization.name} orgId={organization.id}>
              <title>Mongen | Organization profile </title>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Container>
                  <Typography  variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop: "15px", fontWeight:300}}> Organization profile
                  </Typography>
                  <Typography variant="h6" align="center" color="textSecondary" paragraph>
                  On this page you can enter information related to your Organization, it will be displayed throughout the site.
                  </Typography>
                  <div>
                    {/* <div style={{width:"30%", float: "left", marginTop:"5%", marginLeft: "5%"}}>
                      <DropzoneArea
                            acceptedFiles={['image/*']}
                            onChange={(files) => console.log('Files:', files)}
                            dropzoneText="Upload the logo"
                      />
                    </div>  */}
                    {page === 1 ? (
                      <div>
                        <form>
                            <TextField id="name" label="Organization name *" className={classes.textField} defaultValue={orgData.name} onChange={(event) => updateForm("name", event.target.value)}/>
                            <TextField id="tagline" label="Tagline *"className={classes.textField} defaultValue={orgData.tagline} onChange={(event) => updateForm("tagline", event.target.value)}/>
                            <TextField id="mission" label="Your Mission *" multiline rowsMax={4} className={classes.textField} defaultValue={orgData.mission} onChange={(event) => updateForm("mission", event.target.value)}/>
                            <TextField id="values" label="Your Vision *" multiline rowsMax={4} className={classes.textField} defaultValue={orgData.vision} onChange={(event) => updateForm("vision", event.target.value)}/>
                            <TextField id="story" label="Your Story *" multiline rowsMax={4} className={classes.textField} defaultValue={orgData.story}  onChange={(event) => updateForm("story", event.target.value)}/>
                            <div style={{marginLeft:"20%", marginTop:"30px"}}>
                              <CountriesController callback={updateCountry} className="" defaultValue={orgData.country}/>
                            </div>
                            <TextField id="social" label="Social Network Url *" multiline rowsMax={4} className={classes.textField} defaultValue={orgData.socialNetworkUrl} onChange={(event) => updateForm("social_network_url", event.target.value)}/>
                            {/* <TextField id="main_contact" label="Main Contact *" multiline rowsMax={4} className={classes.textField} defaultValue={`${orgData.main_contact.first_name} ${orgData.main_contact.last_name}`}/> */}
                        </form>
                      </div>
                    ) : ( <></> )}
                      {page === 2 ? (
                        <div style={{marginTop:"100px", marginBottom:"100px", marginLeft:"30%"}}>
                          <OrganizationLogo callback={updateLogo}></OrganizationLogo>
                        </div>
                      ) : ( <></> )}
                      {page === 3 ? (
                        <div>
                          <Typography style={{marginTop:"100px", marginLeft:"30%", color:"green"}}> Your organization is updated!</Typography>
                          <Typography style={{marginBottom:"100px", marginLeft:"30%"}}> Click PREVIEW to check how your org will look like live :)  </Typography>
                        </div>
                      ) : ( <></> )}    
                  </div>
                  <div  style={{marginTop:"100px", marginBottom:"150px"}}>
                    {validationError ? (
                          <div style={{width:"50%", float:"left", marginRight:"100px", paddingLeft:"70px", marginTop:"50px"}}>
                            <Typography style={{color:"red"}}>* Please fill in all the required fields</Typography>
                          </div>
                        ): (<></>)}
                        <div style={{width:"20%", float:"right"}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          > Next
                          </Button>
                        </div>
                        {page !== 1 && (
                       <div style={{width:"20%", float:"right", marginRight:"10px"}}>
                        <Button onClick={handleBack} className={classes.button} variant="outlined">
                          Back
                        </Button>
                        </div>
                      )}
                    </div>
                </Container>
              </div>
            </BasePageAboutMongen>
          ) : (
            <h1>There is no organization with such name</h1>
          )}
        </NoSsr>
    )
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
  
  export default Profile
  
