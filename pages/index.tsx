import {
  Container,
  Paper,
  Grid,
  Typography,
  ListItem,
  List,
  NoSsr,
  Button,
  TextField,
  Modal,
} from "@material-ui/core"
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
import { BasePage } from "../components/templates"
import fetch from "isomorphic-unfetch"
import Router from "next/router"
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles(theme => ({
  rootLight: {
    flexGrow: 1,
    color: theme.palette.secondary.light,
  },
  rootSemiLight: {
    flexGrow: 1,
    backgroundColor: "#656464",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paperLight: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 240,
    width: 300,
  },
  projectStatusLight: {
    flex: 1,
    paddingTop: theme.spacing(1),
    textAlign: "center",
  },
  projectTitle: {
    paddingTop: theme.spacing(4),
    textAlign: "center",
  },
  pageTitleSectionLight: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    textAlign: "center",
  },
  pageTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
    padding: theme.spacing(1),
  },
  toggleModeLight: {
    border: "1px grey solid",
  }, 
  modalLight: {
    position: 'absolute',
    width: 400,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10, 15, 3),
  },
}))
export interface TestProject {
  project_id: number
  name: string
  project_status: string
  data: { url?: string }
}

function Index({projects}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles(projects)  
  
  function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    }
  }
  const [openModal, setOpenModal] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [openModalProjectId, setOOpenModalProjectId] = React.useState("");
  const [openModalProjectName, setOpenModalProjectName] = React.useState("");

  const handleModalOpen = (id, name) => {
    setOOpenModalProjectId(id)
    setOpenModalProjectName(name)
    setOpenModal(true);
  }

  const handleModalClose = () => {
    setOpenModal(false);
  }

  async function getNewProjectName(projectId) {
    const projectName = (document.getElementById("modal_" + projectId) as HTMLInputElement).value
    
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: projectId,
        name: projectName
      }),
    }
    console.log(requestOptions)

    const response = await fetch(
      `${process.env.publicmongenCore}/api/v1/update_project_name`,
      requestOptions
    )
    await response.json()
    if (typeof window !== 'undefined') {
      window.location.reload(false) // reloading the page whe project name is changed
      }
  }

  return (
      <NoSsr>
        <BasePage className={classes.rootLight}>
        <title>Δ | Projects</title>
        <Paper square={true} className={classes.pageTitleSectionLight}>
              <Typography variant="h1" color="inherit" className={classes.pageTitle}>
              Projects
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
              >
                Select a project to view latest test runs
              </Typography>
            </Paper>
          <Container maxWidth="lg" className={classes.container}>
            {projects[0] ? ( // checking if props exist (if there are projects)
              <Grid container spacing={3}>
                {projects.map(project => (
                  <Grid item xs={12} sm={3} key={project.project_id}>
                    <List>
                      <ListItem
                        button
                      >  
                        <Paper className={classes.paperLight} id={`paper_${project.project_id}`}>
                          <Button  onClick={() => handleModalOpen(project.project_id, project.name) } id={`${project.project_id}`}><SettingsIcon style={{color: "grey", marginLeft:"90%"}}></SettingsIcon></Button> 
                          <Modal
                            open={openModal}
                            onClose={handleModalClose}
                          >
                            <div style={modalStyle}  className={classes.modalLight}>
                          <Typography style={{ marginBottom: "15px"}}> Update project name: 
                          </Typography>
                          <form noValidate autoComplete="off">
                            <TextField id={`modal_${openModalProjectId}`} style={{width: "max-content"}} label={openModalProjectName} className={classes.rootLight} variant="outlined"/>
                            <Button variant="contained" style={{border: "1px solid grey", marginTop: "15px", marginLeft: "30px"}} onClick={() => getNewProjectName(project.project_id)}>Submit</Button> 
                          </form>

                          </div>
                          </Modal>
                          <div onClick={() => Router.push(`/launches/${project.project_id}`)}>
                            <Typography
                              component="p"
                              variant="h4"
                              className={classes.projectTitle}
                            >
                              {project.name}
                            </Typography>
                            <Typography
                              color="textSecondary"
                              className={classes.projectStatusLight}
                              component="p"
                            >
                              {project.project_status}
                            </Typography>
                          </div>
                        </Paper>{" "}
                       
                      </ListItem>
                    </List>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <h1>No projects were found! </h1>
            )}
          </Container>
        </BasePage>
      </NoSsr>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const projectReq = await fetch(`${process.env.mongenCore}/api/v1/projects`, {
  //   method: "GET",
  // })
  // const projects: TestProject[] = await projectReq.json()

  const projects: TestProject[] = [
    {
    project_id: 1,
    name: "string",
    project_status: "string",
    data: null
    }
  ]

  return {
    props: { projects },
  }
}

export default Index
