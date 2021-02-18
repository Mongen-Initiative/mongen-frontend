import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Link, Typography, Button, TextField, Fade, Divider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Image from 'material-ui-image'
import OrganizationService from '../services/OrganizationService'
import CollaboratorService from '../../components/services/CollaboratorService'
import DoneAllIcon from '@material-ui/icons/DoneAll'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largePhoto: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    frameLight: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: "80%",
        overflowY: "auto",
    },
    title: {
        fontWeight:"bolder",
        marginTop:"15px",
    },
    buttons: {
        marginTop:"30px",
        width: "280px",
        marginRight:"30px",
    },
    titleField: {
        width:"60%",
        marginTop:"3%",
        marginLeft:"20%",
    },
    textField: {
        width:"60%",
        marginTop:"1%",
        marginLeft:"20%",
    },
    commentsField: {
        width:"60%",
        marginTop:"3%",
        marginLeft:"5%",
    },
    commentsFieldCollab: {
        width:"70%",
        marginTop:"1%",
        marginLeft:"5%",
    },
  }),
);

const mission = "Saving children. Saving children. Saving children. Saving children. Saving children. Saving children."
const country = "Nigeria"
const url = "https://instagram.com/saving-children"
const contact = "James The Boss"

export function PendingOrgReviewModal(children: any) {
  const { org } = children

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const updateVerificationStatus = (status: boolean, org_id: number) => {
    OrganizationService.setVerifiedStatus(
        {verified: status},
        org_id
    )
  }

  return (
    <div>
        -{" "} {" "} {" "}
        <Link href="#" style={{color:"#656565", paddingLeft:"15%"}} onClick={handleModalOpen}>
            {org.name}
        </Link>
        <Modal
            open={open}
            onClose={handleModalClose}
            className={classes.modal}
        >
            <Fade in={open}>
                <div className={classes.frameLight} id="frame">
                    <div>
                        <Button onClick={handleModalClose} style={{marginLeft:"90%"}}>X</Button>
                        <h2 id="title" style={{marginLeft:"38%", marginTop:"-10px"}}>{org.name}</h2>
                        <Divider />
                        <div style={{width:"20%", float: "left", marginTop:"5%", marginLeft: "5%"}}>
                            <div style={{border:"1px solid black", padding:"1px"}}>
                                <Image  src={org.logoUrl}/>
                            </div>
                        </div> 
                        <div style={{width:"75%", float: "right"}}>
                            <form>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Mission</Typography>
                                <Typography className={classes.textField}> {org.mission} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Vision</Typography>
                                <Typography className={classes.textField}> {org.vision} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Country</Typography>
                                <Typography className={classes.textField}> {org.country.name} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Main Social network</Typography>
                                <div className={classes.textField}>
                                    <Link  href={org.socialNetworkUrl}> {org.socialNetworkUrl} </Link>
                                </div>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Main contact</Typography>
                                <Typography className={classes.textField}> {org.collaborator.firstName} {org.collaborator.lastName}</Typography>
                                <Typography className={classes.textField}> {org.collaborator.email}</Typography>
                                {/* <Typography className={classes.textField}> {org.collaborator.countryCollaborator.name}</Typography> */}
                            </form>
                        </div>
                        <Divider />
                        <div id="approvalPart" style={{marginTop:"10px"}} >
                            <TextField label="Comments" className={classes.commentsField}/>
                            <Button style={{marginLeft:"65%", marginTop:"20px", color:"green"}} onClick={() => updateVerificationStatus(true, org.id)} variant="outlined" href="#">Accept</Button>
                            <Button style={{marginLeft:"5%", marginTop:"20px", color:"red"}} onClick={() => updateVerificationStatus(false, org.id)} variant="outlined" href="#">Reject</Button>
                        </div>
                    </div>
                </div>
            </Fade>
      </Modal>
    </div>
  );
}

export function LiveOrgModal(children: any) {
    const { org } = children
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleModalOpen = () => {
      setOpen(true);
    };
  
    const handleModalClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
          <Button variant="outlined" href="#" style={{ paddingLeft:"15%"}} onClick={handleModalOpen}>
              View
          </Button>
          <Modal
              open={open}
              onClose={handleModalClose}
              className={classes.modal}
          >
              <Fade in={open}>
                   <div className={classes.frameLight} id="frame">
                    <div>
                        <Button onClick={handleModalClose} style={{marginLeft:"90%"}}>X</Button>
                        <h2 id="title" style={{marginLeft:"38%", marginTop:"-10px"}}>{org}</h2>
                        <Divider />
                        <div style={{width:"20%", float: "left", marginTop:"5%", marginLeft: "5%"}}>
                            <div style={{border:"1px solid black", padding:"1px"}}>
                                <Image  src="/photoId.jpg"/>
                            </div>
                        </div> 
                        <div style={{width:"75%", float: "right"}}>
                            <form>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Mission</Typography>
                                <Typography className={classes.textField}> {mission} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Vision</Typography>
                                <Typography className={classes.textField}> {mission} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Country</Typography>
                                <Typography className={classes.textField}> {country} </Typography>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Social networks</Typography>
                                <div className={classes.textField}>
                                    <Link  href={url}> {url} </Link>
                                </div>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Main contact</Typography>
                                <Typography className={classes.textField}> {contact} </Typography>
                                <Accordion style={{width:"50%", marginLeft:"18%", marginTop:"3%"}}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                    <Typography>List of Collaborators</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography> Alex P, Juan N, other great people  </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{width:"50%", marginLeft:"18%", marginTop:"3%"}}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                    <Typography>List of Beneficiaries</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography> Alex P, Juan N, other great people  </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </form>
                        </div>
                        <Divider />
                        <div id="approvalPart" style={{marginTop:"10px"}} >
                            <TextField label="Comments" className={classes.commentsField}/>
                            <Button style={{marginLeft:"80%", marginTop:"20px", color:"red"}} variant="outlined" href="#">Disable</Button>
                        </div>
                    </div>
                </div>
              </Fade>
        </Modal>
      </div>
    )
  }

  export function CollaboratorsModal(children: any) {
    const { collaborator, nationality, button, isNew } = children
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);

    const [collaboratorData, setCollaboratorData] = React.useState({
        first_name: collaborator,
        last_name: collaborator,
        country_iso: nationality,
        type: "Collaborator",
    })
      
    function updateForm(type, data) {
        setCollaboratorData({ ...collaboratorData, [type]: data })
    }

    const handleModalOpen = () => {
      setOpen(true);
    };
  
    const handleModalClose = () => {
      setOpen(false);
      setSuccessMessage(false);
    };

    const createCollaborator = () => {
        CollaboratorService.create({ ...collaboratorData })
          .then(
            (response) => {
              console.log(`Collaborator added! ID: ${response.data.id}`)
              setSuccessMessage(true);
            }
          )
          .catch(() => {
            console.log("Something failed ):")
          });
    };

    const updateCollaborator = () => {
        CollaboratorService.update({ ...collaboratorData })
          .then(
            (response) => {
              console.log(`Collaborator updated! ID: ${response.data.id}`)
              setSuccessMessage(true);
            }
          )
          .catch(() => {
            console.log("Something failed ):")
          });
    };

    const deleteCollaborator = () => {
        CollaboratorService.delete({ ...collaboratorData })
          .then(
            (response) => {
              console.log(`Collaborator deleted! ID: ${response.data.id}`)
              setSuccessMessage(true);
            }
          )
          .catch(() => {
            console.log("Something failed ):")
          });
    };
  
    return (
      <div>
          <Button variant="outlined" href="#" style={{width:"35%", marginTop:"3%"}} onClick={handleModalOpen}>
              {button}
          </Button>
          <Modal
              open={open}
              onClose={handleModalClose}
              className={classes.modal}
          >
              <Fade in={open} style={{width:"40%", height:"67%"}}>
                   <div className={classes.frameLight} id="frame">
                    <div>
                        <Button onClick={handleModalClose} style={{marginLeft:"90%"}}>X</Button>
                        {isNew === "yes" ? (
                                <h2 id="title" style={{marginLeft:"38%", marginTop:"-10px"}}>New Collaborator</h2>
                        ) : (
                                <h2 id="title" style={{marginLeft:"38%", marginTop:"-10px"}}>{collaborator}</h2>
                        )}  
                         <Divider />
                        <div style={{marginBottom:"50px"}}>
                            <form>
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>First Name</Typography>
                                <TextField 
                                    className={classes.textField}
                                    defaultValue={collaborator}
                                    id="first_name"
                                    onChange={(event) => updateForm("first_name", event.target.value)}
                                /> 
                                  <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Last Name</Typography>
                                <TextField 
                                    className={classes.textField}
                                    defaultValue={collaborator}
                                    id="last_name"
                                    onChange={(event) => updateForm("last_name", event.target.value)}
                                /> 
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Nationality</Typography>
                                <TextField 
                                    className={classes.textField} 
                                    defaultValue={nationality} 
                                    id="country_iso"
                                    onChange={(event) => updateForm("country_iso", event.target.value)}
                                />
                                <Typography className={classes.titleField} style={{fontWeight:"bolder"}}>Type</Typography>
                                <TextField 
                                    className={classes.textField} 
                                    defaultValue="Collaborator" 
                                    id="type"
                                    onChange={(event) => updateForm("type", event.target.value)}
                                />
                            </form>
                        </div>
                        {isNew === "yes" ? (
                            <div>
                                <Button style={{marginLeft:"34%", marginTop:"10px", color:"green", width: "120px"}} variant="outlined" onClick={createCollaborator}>Add</Button>
                                {successMessage === true ? (
                                    <div style={{marginLeft:"30%", marginTop:"10px"}}>
                                        <Typography style={{color:"green"}}><DoneAllIcon style={{color:"green", marginRight:"5px"}} />Information sent!</Typography>
                                    </div>
                                ) : (
                                    <></>
                                )}  
                            </div>
                        ) : (
                            <div>
                                <Divider />
                                <div style={{marginTop:"20px"}}>
                                    <Button style={{marginLeft:"40%", marginTop:"20px", color:"green", width: "120px"}} variant="outlined" href="#" onClick={updateCollaborator}>Update</Button>
                                    <Button style={{marginLeft:"8%", marginTop:"20px", color:"red",  width: "120px"}} variant="outlined" href="#" onClick={deleteCollaborator}>Deactivate</Button>
                                    {successMessage === true ? (
                                        <div style={{marginLeft:"30%", marginTop:"10px"}}>
                                            <Typography style={{color:"green"}}><DoneAllIcon style={{color:"green", marginRight:"5px"}} />Information sent!</Typography>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div> 
                        )} 
                    </div>
                </div>
              </Fade>
        </Modal>
      </div>
    );
  }
