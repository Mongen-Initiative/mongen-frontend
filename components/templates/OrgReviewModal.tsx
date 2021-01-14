import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link, Typography, Avatar, Button, TextField } from '@material-ui/core';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
    largePhoto: {
        width: theme.spacing(7),
        height: theme.spacing(7),
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
  const [modalStyle] = React.useState(getModalStyle);
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
        >
            <div style={modalStyle} className={classes.paper}>
                <Button onClick={handleModalClose} style={{marginLeft:"90%"}}>X</Button>
                <h2 id="title" style={{marginLeft:"38%"}}>{org}</h2>
            <Typography style={{fontWeight:"bolder"}}>
                Mission
            </Typography>
            <Typography>
                {mission}
            </Typography>
            <Typography style={{fontWeight:"bolder", marginTop:"15px"}}>
            Vision
            </Typography>
            <Typography>
                {mission}
            </Typography>
            <Typography style={{fontWeight:"bolder",  marginTop:"15px"}}>
            Country
            </Typography>
            <Typography>
                {country}
            </Typography>
            <Typography style={{fontWeight:"bolder",  marginTop:"15px"}}>
            Social networks
            </Typography>
            <Link href={url}>
                {url}
            </Link>
            <Typography style={{fontWeight:"bolder",  marginTop:"15px"}}>
            Main contact
            </Typography>
            <Typography>
                {contact}
            </Typography>
            <Typography style={{fontWeight:"bolder",  marginTop:"15px"}}>
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
      </Modal>
    </div>
  );
}