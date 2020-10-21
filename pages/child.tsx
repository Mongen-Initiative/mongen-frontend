import {
    Container,
    Typography,
    NoSsr,
    ButtonBase,
  } from "@material-ui/core"
  import { GetServerSideProps } from 'next'
  import { InferGetServerSidePropsType } from 'next'
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
  import { BasePage, CallToActionButtons } from "../components/templates"
  
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
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
        height: 200,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
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
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
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
          <title>Mongen Initiative</title>
          <Container className={classes.cardGrid}>
            {/* End hero unit */}
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{height: "350px", width: "600px", marginLeft: "320px"}}
                        href ="/sponsorForm"
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                                >
                                {image.title}
                                    <span className={classes.imageMarked}/>
                                </Typography>
                            </span>
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
           {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Visible Children
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Transforming the lives of street children and turn their potentials into assets for the society.
          </Typography>
        </footer>
          </BasePage>
        </NoSsr>
    )
  }

  export default Child
  