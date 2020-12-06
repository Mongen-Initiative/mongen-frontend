import {
    Container,
    Typography,
    NoSsr,
    ButtonBase,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage, CallToActionButtons } from "../../components/templates"
import { Footer } from "../../components/templates/Footer";
  
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: "center",
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    rootLight: {
      flexGrow: 1,
      color: theme.palette.secondary.light,
    },
    image: {
        position: 'relative',
        display: 'flex',
        height: 200,
        width: "100%",
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
  }));
  
  export interface Children {
  }

  const image = 
    {
      url: '/child.jpg',
      title: 'Child 1',
    };
    
  function Child() {
    const classes = useStyles()  
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight}>
          <title>Mongen | Child details</title>
          <Container className={classes.cardGrid}>
            {/* End hero unit */}
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{height: "350px", width: "55%", marginLeft: "25%"}}
                        href ="/visible-children/paymentForm"
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                backgroundImage: `url(${image.url})`,
                                }}
                            />
                    </ButtonBase>
                  <CallToActionButtons/>
                  <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                    Information about "Child 1"
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Name and Surname:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Location:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Date of birth, gender, state of origin:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Fear/trauma:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Skills and strengths:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Reason for child being on the street:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Last school attended, last class stopped:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:"50px", fontStyle:"italic"}}>
                    Name, phone and address of the parent/ward:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom style={{marginTop:"50px"}}>
                   Information about the child. Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. 
                    Information about the child. Information about the child. Information about the child. Information about the child. 
                  </Typography>
                  <CallToActionButtons/>
          </Container>
            <Footer />
          </BasePage>
        </NoSsr>
    )
  }

  export default Child
  