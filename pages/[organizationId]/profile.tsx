

import {
    Container,
    Typography,
    NoSsr,
    TextField,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage } from "../../components/templates"
import {DropzoneArea} from 'material-ui-dropzone'
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { Organization } from "."
import OrganizationService from "../../components/services/OrganizationService"

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
    const [orgData, setOrgData] = React.useState(organization);
    
    function updateForm(type, data) {
      setOrgData({ ...orgData, [type]: data })
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
            <BasePage className={classes.rootLight} title={organization.name} orgId={organization.id}>
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
                    <div style={{width:"30%", float: "left", marginTop:"5%", marginLeft: "5%"}}>
                      <DropzoneArea
                            acceptedFiles={['image/*']}
                            onChange={(files) => console.log('Files:', files)}
                            dropzoneText="Upload the logo"
                      />
                    </div> 
                    <div style={{width:"60%", float: "right", marginTop:"10px"}}>
                      <form>
                          <TextField id="name" label="Organization name" className={classes.textField} defaultValue={organization.name} onChange={(event) => updateForm("name", event.target.value)}/>
                          <TextField id="tagline" label="Tagline"className={classes.textField}/>
                          <TextField id="mission" label="Your Mission" multiline rowsMax={4} className={classes.textField} defaultValue={organization.mission} onChange={(event) => updateForm("mission", event.target.value)}/>
                          <TextField id="values" label="Your Vision" multiline rowsMax={4} className={classes.textField} defaultValue={organization.vision} onChange={(event) => updateForm("vision", event.target.value)}/>
                          <TextField id="values" label="Your Values" multiline rowsMax={4} className={classes.textField} />
                          <TextField id="story" label="Your Story" multiline rowsMax={4} className={classes.textField}/>
                          <TextField id="country" label="Country" multiline rowsMax={4} className={classes.textField} defaultValue={organization.country}/>
                          <TextField id="social" label="Social Network Url" multiline rowsMax={4} className={classes.textField}/>
                          <TextField id="main_contact" label="Main Contact" multiline rowsMax={4} className={classes.textField} defaultValue={`${organization.main_contact.firstName} ${organization.main_contact.firstName}`}/>
                      </form>
                    </div>
                  </div>
                  <Button variant="contained" color="primary" size="large" style = {{marginLeft:"40%", marginTop:"8%", width: "10%"}} onClick={updateOrganization}> Update </Button>
                </Container>
              </div>
            </BasePage>
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
  
