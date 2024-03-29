import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  CssBaseline,
  AppBar,
  Typography,
  Link,
  Toolbar, 
  IconButton, Button, Menu, MenuItem} from "@material-ui/core"
import { useRouter } from "next/router"
import PersonIcon from '@material-ui/icons/Person'
import { MuiTheme } from "../MuiTheme"
import MenuIcon from '@material-ui/icons/Menu';

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
    display:"flex",
    marginTop: "8px",
    color: "#6c6c6c",
  },
}))

type Props = {
  children: React.ReactNode
  className?: string
  color?: any
  title?: string
  isDesktop?: any
}

export const BasePage = function(props: Props) {
  const { children, className, title, isDesktop } = props
  const classes = useStyles(props)
  
  const seoName = convertTitleToSeoUrl(title)
  const router = useRouter()
  
  const responsive = {
    heightNavBar: isDesktop ? "105px": '80px'
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${classes.root} ${className}`}>
      <AppBar position="absolute" style={{backgroundColor: "#f2f2f2", height:responsive.heightNavBar}}>
        <Toolbar>
          {/* if responsive - the nav bar gets squeezed to menu */}
          {isDesktop ? (
            <div style={{ width: "100%", marginTop:"32px"}}>
              <div style={{ float: "left", width: "40%"}} >
                <Typography
                  variant="h5"
                  style={{ fontWeight: 400, fontSize: "1.8em", float: "left", marginLeft:"10px"}}
                >
                  <Link
                    underline="none"
                    href={`/${seoName}`}
                    className={classes.titleLight}
                  >
                    {title}
                  </Link>
                </Typography>
              </div>
              <div style={{ float: "left", width: "10%"}}>
                <Typography>
                  <Link
                    underline="none"
                    href={`/${seoName}/about`}
                    className={classes.titleLight}
                  >
                    About Us
                  </Link>
                </Typography>
              </div>
              <div style={{ float: "left", width: "10%"}}>
                <Typography>
                  <Link
                    underline="none"
                    href={`/${seoName}/help`}
                    className={classes.titleLight}
                  >
                    Get involved
                  </Link>
                </Typography>
              </div>
              <div style={{ float: "left", backgroundColor: `${MuiTheme.palette.primary.main}`, marginLeft:"10%", width:"100px" }}>
                <Button size="large" style={{color:'white', paddingLeft:"20%"}}  href={`/${seoName}/payment`}>Donate</Button>
              </div>
              <div style={{ float: "right", width: "3%", marginLeft:"10%"}}>
                <IconButton onClick={() => router.push(`/${seoName}/login-sponsor`)}>
                  <PersonIcon style={{color:"#6c6c6c"}} />
                </IconButton>
              </div>
          </div>
          ) : (
            <div style={{marginTop:"18px"}}>
              <IconButton edge="start" aria-haspopup="true" onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => router.push(`/${seoName}/about`)}>About Us</MenuItem>
                <MenuItem onClick={() => router.push(`/${seoName}/help`)}>Get involved</MenuItem>
                <MenuItem onClick={() => router.push(`/${seoName}/login-sponsor`)}>My Account</MenuItem>
              </Menu>
              <div style={{ float: "right", backgroundColor: `${MuiTheme.palette.primary.main}`, width:"100px", marginLeft:"300px"}}>
                <Button size="medium" style={{color:'white', paddingLeft:"20%"}}  href={`/${seoName}/payment`}>Donate</Button>
              </div>
          </div>
          )}
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
