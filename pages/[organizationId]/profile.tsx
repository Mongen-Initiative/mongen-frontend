

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
import { Router, useRouter } from "next/router"

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
    const router = useRouter()
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
          callingCode: "374",
          countryISO: "AM",
          countryISO3: "ARM",
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
    const [previewUrl, setPreviewUrl] = React.useState("");

    function updateForm(type, data) {
      setOrgData({ ...orgData, [type]: data })
    }
    
    function updateCountry(data) {
      updateForm("country", data);
    }

    function updateLogo(data) {
      updateForm("logoUrl", data);
    }

    function updateSocialNetworkUrl(data) {
      setOrgData({ ...orgData, ["socialNetworkUrl"]: data })
    }

    function handleNext() {
      //page 1 validation
      if(page === 1) {
        if (orgData.name === "" || 
        orgData.tagline === "" || 
        orgData.mission === "" || 
        orgData.vision === "" || 
        orgData.story === "" ||
        orgData.socialNetworkUrl === "") {
        setValidationError(1)
        }
        else {
          setValidationError(0)
          setPage(page + 1)
        }
      }
      //page 2 validation
      if(page === 2) {
        if (orgData.logoUrl === "") {
        setValidationError(1)
        }
        else {
        setValidationError(0)
        setPage(page + 1)
        updateOrganization()
        }
      }
    }

    const handleBack = () => {
      setPage(page - 1);
      setValidationError(0)
    }

    const publishOrg = () => {
      OrganizationService.setOrganizationStatus(
          {status: "Published"},
          organization.id
      )

      router.push(`/${organization.id}`)
  }

    const updateOrganization = () => {
      console.log(orgData)
      OrganizationService.update(orgData)
      .then(
          (response) => {
            console.log(`Organization is updated! ID: ${response.data.id}`)
            // setPreviewUrl(`/${response.data.id}`)

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
                  <Typography variant="body1" align="center" color="textSecondary" paragraph>
                    On this page you can enter information related to your Organization, it will be displayed throughout the site.
                  </Typography>
                  <div style={{border:"1px solid", paddingTop:"10px", paddingBottom:"10px", marginBottom:"30px", marginTop:"50px", width:"50%", marginLeft:"25%"}}>
                    <Typography align="center" color="primary"> The status of your organization is: <span style={{fontWeight:"bolder"}}>{organization.status}</span></Typography>
                    {page === 3 ? (
                      <Typography align="center" color="primary"> Preview your site and publish your organization, if it's still Pending.</Typography>
                      ):(
                      <Typography align="center" color="primary"> Go to the final step to save changes or publish your organization.</Typography>
                      )
                    }
                  </div>
                  <div>
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
                            <TextField id="social" label="Social Network Url *" multiline rowsMax={4} className={classes.textField} defaultValue={orgData.socialNetworkUrl} onChange={(event) => updateSocialNetworkUrl(event.target.value)}/>
                        </form>
                      </div>
                    ) : ( <></> )}
                      {page === 2 ? (
                        <div style={{marginTop:"50px", marginBottom:"100px", marginLeft:"30%"}}>
                          <OrganizationLogo callback={updateLogo}></OrganizationLogo>
                        </div>
                      ) : ( <></> )}
                      {page === 3 ? (
                        <Typography style={{marginTop:"70px", marginLeft:"40%", color:"green"}}> Your organization is updated!</Typography>
                        ) : ( <></> )
                      }    
                  </div>
                  {/* Back and Next buttons logic */}
                  <div  style={{marginTop:"100px", marginBottom:"150px"}}>
                    {page < 3 ? (
                      <div>
                        {validationError ? (
                              <div style={{width:"50%", float:"left", marginRight:"100px", paddingLeft:"70px", marginBottom:"250px"}}>
                                <Typography style={{color:"red"}}>* Please fill in all the required fields</Typography>
                              </div>
                          ):(<></>)
                        }
                        <div style={{width:"20%", float:"right"}}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                          > Next
                          </Button>
                        </div>
                      </div>
                      ):(
                      <></>)
                    }
                    {page !== 1 && (
                      <div>
                        {page === 3 ? (
                          <div style={{float:"right", marginRight:"100px"}}>
                            <a target="_blank" href={previewUrl} rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                > Preview
                                </Button>
                            </a>
                            {organization.status.includes("Pending") ? (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={publishOrg}
                                style={{marginLeft:"10px"}}
                              > Publish
                              </Button>
                              ):(<></>)
                            }
                          </div>
                          ):(<></>)
                        }
                        <Button onClick={handleBack} variant="outlined" style={{float:"right", marginRight:"10px", width:"10%"}}>
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
  
