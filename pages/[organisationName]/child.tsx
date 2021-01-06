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
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Children } from ".";
  
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
      textTitle: {
        marginTop: "50px",
      },
      textInfo: {
        marginTop: "50px",
        fontStyle:"italic",
      },
  }));
  
  const image = 
    {
      url: '/child.jpg',
      title: 'Child 1',
    };

  const infoText = "Information about the child. Information about the child. Information about the child. \n Information about the child. Information about the child. Information about the child. Information about the child.  \n Information about the child. Information about the child. Information about the child. Information about the child."
  const title = "Your title"

  function Child({ children }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(children)
  
    return (
        <NoSsr>
          <BasePage className={classes.rootLight} title={title}>
          <title>Mongen | Child details</title>
          {children ? (
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
                  <CallToActionButtons title={title}/>
                  <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    Information about "Child 1"
                  </Typography>
                  <div style={{paddingLeft:"80px", paddingRight:"80px"}}>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Name and Surname:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Location:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Date of birth, gender, state of origin:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Skills and strengths:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Reason for child being on the street:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textTitle} style={{fontStyle:"italic"}}>
                    Last school attended, last class stopped:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  <Typography component="h3" align="center" color="textPrimary" gutterBottom className={classes.textInfo}>
                    Name, phone and address of the parent/ward:
                  </Typography>
                  <Typography component="h3"  align="center" color="textPrimary" gutterBottom className={classes.textTitle}>
                    {infoText}
                  </Typography>
                  </div>
                  <CallToActionButtons title={title}/>
          </Container>
          ) : (
            <h1>Sorry, we can't display the info about this child now. Come back later, we are working hard to fix the issue!</h1>
          )}
            <Footer />
          </BasePage>
        </NoSsr>
    )
  }

  export const getServerSideProps: GetServerSideProps = async context => {
    const { childId } = context.query
  
    const childReq = await fetch(`http://localhost:8080/api/v1/${childId}`, {
      method: "GET",
    })
    const children: Children[] = await childReq.json()
  
    return {
      props: { children },
    }
  }
  
  export default Child  