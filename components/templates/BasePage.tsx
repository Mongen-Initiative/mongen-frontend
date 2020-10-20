import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  CssBaseline,
  AppBar,
  Typography,
  Link,
  Toolbar } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbarLight: {
    paddingLeft: "40px",
  },
  spaceAfterNavBar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  mongenTitleLight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1em",
    padding: theme.spacing(1),
    color: "black",
  },
}))

type Props = {
  children: React.ReactNode
  className?: string
}

export const BasePage = function(props: Props) {
  const { children, className } = props
  const classes = useStyles(props)
  
  return (
    <div className={`${classes.root} ${className}`}>
        {/* top nav bar with mongen name */}
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.toolbarLight}>
          {/* <img src="vc_logo.png"></img> */}
          <Typography
            variant="h5"
            style={{ fontWeight: 400, margin: "5px", fontSize: "25px"}}
          >
            <Link
              underline="none"
              href="/"
              className={classes.mongenTitleLight}
            >
              Mongen Initiative
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.spaceAfterNavBar} />
          {/* all the main body */}
        <section>{children}</section>
      </main>
    </div>
  )
}
