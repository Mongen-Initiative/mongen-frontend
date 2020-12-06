import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  CssBaseline,
  AppBar,
  Typography,
  Link,
  Toolbar, 
  Menu,
  MenuItem,
  IconButton} from "@material-ui/core"
import { useRouter } from "next/router"
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
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
    paddingTop: "2%",
    color: "black",
  },
  titleLight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3%",
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
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleMenuClose = () => {
    setAnchorEl(null)
  };
  
  const router = useRouter()

  
  return (
    <div className={`${classes.root} ${className}`}>
        {/* top nav bar with mongen name */}
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <div  style={{ width: "100%"}}>
            <Typography
              variant="h5"
              style={{ fontWeight: 400, fontSize: "1.8em", float: "left"}}
            >
              <Link
                underline="none"
                href="/"
                className={classes.titleLight}
              >
                Mongen Initiative
              </Link>
            </Typography>
            <div style={{ float: "right", width: "6%"}}>
            {/* Menu dropdown */}
            <IconButton onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                style={{marginTop:"2%"}}
              >
                <MenuItem onClick={() => router.push(`/newRecord`)}>Add new Child Record</MenuItem>
                <MenuItem onClick={() => router.push(`/orgProfile`)}>Go to organization profile</MenuItem>
                <MenuItem onClick={() => router.push(`/sponsorProfile`)}>Go to sponsor's profile</MenuItem>
              </Menu>
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
      <AppBar position="absolute">
        <Toolbar>
          <div  style={{ width: "100%"}}>
            <Typography
              variant="h5"
              style={{ fontWeight: 400, fontSize: "1.8em", float: "left"}}
            >
              <Link
                underline="none"
                href="/"
                className={classes.mongenTitleLight}
              >
                Mongen Initiative
              </Link>
            </Typography>
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