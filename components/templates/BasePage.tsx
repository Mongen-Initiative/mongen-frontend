import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  CssBaseline,
  AppBar,
  Typography,
  Link,
  Toolbar, 
  IconButton} from "@material-ui/core"
import { useRouter } from "next/router"
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  spaceAfterNavBar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
  },
  titleLight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    color: "#edf2ea",
  },
}))

type Props = {
  children: React.ReactNode
  className?: string
  color?: any
  title?: string
}

export const BasePage = function(props: Props) {
  const { children, className, color, title } = props
  const classes = useStyles(props)
  
  const router = useRouter()

  const url = convertTitleToSeoUrl(title)
  
  return (
    <div className={`${classes.root} ${className}`}>
        {/* top nav bar with mongen name */}
      <CssBaseline />
      <AppBar position="absolute" style={{color: `${color}`}}>
        <Toolbar>
          <div  style={{ width: "100%"}}>
            <Typography
              variant="h5"
              style={{ fontWeight: 400, fontSize: "1.8em", float: "left"}}
            >
              <Link
                underline="none"
                href={`/${url}`}
                className={classes.titleLight}
              >
                {title}
              </Link>
            </Typography>
            <div style={{ float: "right", width: "6%"}}>
            {/* Login icon */}
            <IconButton onClick={() => router.push(`/loginSponsor`)}>
              <PersonIcon style={{color:"#edf2ea"}} />
            </IconButton>
            </div>
          </div>
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


export const BasePageAboutMongen = function(props: Props) {
  const { children, className } = props
  const classes = useStyles(props)
  
  return (
    <div className={`${classes.root} ${className}`}>
        {/* top nav bar with mongen name */}
      <CssBaseline />
      <main className={classes.content}>
        <div style={{marginTop:"30px"}} />
          {/* all the main body */}
        <section>{children}</section>
      </main>
    </div>
  )
}

export function convertTitleToSeoUrl(title) {
  if(typeof title === "string"){
    return title
        .normalize('NFD')               // Change diacritics
        .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
        .replace(/\s+/g,'-')            // Change whitespace to dashes
        .toLowerCase()                  // Change to lowercase
        .replace(/&/g,'-and-')          // Replace ampersand
        .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
        .replace(/-+/g,'-')             // Remove duplicate dashes
        .replace(/^-*/,'')              // Remove starting dashes
        .replace(/-*$/,'');             // Remove trailing dashes
  }
}
