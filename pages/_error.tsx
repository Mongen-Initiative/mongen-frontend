import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { BasePageAboutMongen } from "../components/templates"

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

type Props = {
  httpStatusCode
}

function Error(props: Props) {
  const { httpStatusCode } = props
  const classes = useStyles(props)
  return (
    <BasePageAboutMongen className={classes.root}>
      <Container className={classes.container}>
        <Typography component="h1" variant="h1" color="error" style={{marginTop:"20%"}} align="center" >
          Oops! :(
        </Typography>
        <Typography align="center" variant="h4" style={{marginTop:"30px"}}> Error {httpStatusCode} - Page Not Found</Typography>
        <Typography align="center" style={{marginTop:"20px"}}> Please contact us, if you think this page should be working</Typography>
      </Container>
    </BasePageAboutMongen>
  )
}

export default Error
