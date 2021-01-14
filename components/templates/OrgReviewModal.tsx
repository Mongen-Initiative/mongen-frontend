import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link, Typography, Avatar, Button, TextField, Fade } from '@material-ui/core';

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
  }),
);

const mission = "Saving children. Saving children. Saving children. Saving children. Saving children. Saving children."
const country = "Nigeria"
const url = "https://instagram.com/saving-children"
const contact = "James The Boss"

export default function OrgReviewModal(children: any) {
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
        -{" "} {" "} {" "}
        <Link href="#" style={{color:"#656565", paddingLeft:"15%"}} onClick={handleModalOpen}>
            {org}
        </Link>
        <Modal
            open={open}
            onClose={handleModalClose}
            className={classes.modal}
        >
            <Fade in={open}>
                <div className={classes.frameLight} id="frame">
                    <div >
                        <Button onClick={handleModalClose} style={{marginLeft:"90%"}}>X</Button>
                        <h2 id="title" style={{marginLeft:"38%"}}>{org}</h2>
                        <Typography className={classes.title}>
                            Mission
                        </Typography>
                        <Typography>
                            {mission}
                        </Typography>
                        <Typography className={classes.title}>
                        Vision
                        </Typography>
                        <Typography>
                            {mission}
                        </Typography>
                        <Typography className={classes.title}>
                        Country
                        </Typography>
                        <Typography>
                            {country}
                        </Typography>
                        <Typography className={classes.title}>
                        Social networks
                        </Typography>
                        <Link href={url}>
                            {url}
                        </Link>
                        <Typography className={classes.title}>
                        Main contact
                        </Typography>
                        <Typography>
                            {contact}
                        </Typography>
                        <Typography className={classes.title}>
                        Photo ID
                        </Typography>
                        <Avatar src="/photoId.jpg" className={classes.largePhoto}/>
                        <div id="approvalPart" style={{marginTop:"30px"}} >
                            <TextField label="Comments"/>
                            <div>
                                <Button style={{marginLeft:"60%", color:"green"}} href="#">Accept</Button>
                                <Button style={{marginLeft:"10%", color:"red"}} href="#">Reject</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
      </Modal>
    </div>
  );
}
