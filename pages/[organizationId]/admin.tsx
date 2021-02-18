import {
    Container,
    Typography,
    NoSsr,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen } from "../../components/templates"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid"
import { CollaboratorsModal } from "../../components/templates/DetailedInfoModal"
import { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { Organization } from "."

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 1, 1),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    rootLight: {
      flexGrow: 1,
    },
  }));

  const title ="Your title"

  function Admin({ organization }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organization)  
    const url = "1"

    const columns: ColDef[] = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'nationality', headerName: 'Nationality', width: 130 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
            field: 'button',
            headerName: '.',
            renderCell: (params: ValueGetterParams) =>  (
              <CollaboratorsModal collaborator={params.getValue('name')} button = "Edit" isNew = "no"></CollaboratorsModal>
             ),
            sortable: false,
            width: 150,
         },
      ];
      
      const rows = [
        { id: 1, name: 'Alex O`Sullivan', nationality: 'Nigeria', type: "Collaborator"},
        { id: 2, name: 'Juan Doyle', nationality: 'Nigeria', type: "Moderator"},
        { id: 3, name: 'David Kinsella', nationality: 'Argentina', type: "Collaborator"},
        { id: 4, name: 'John Lennon', nationality: 'Argentina', type: "Beneficiary"},
        { id: 5, name: 'Barack Obama', nationality: 'Nigeria', type: "Admin"},
      ];

    return (
        <NoSsr>
        {organization ? (
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <div style={{marginTop:"40px"}}>
                    <Link style={{marginLeft:"7%", color:"#656565"}} href={`/${url}`}> &larr; Back to {organization.name} Homepage</Link>
                </div>
                <Container className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                    {organization.name} Admin panel
                    </Typography>
                    <div style={{fontSize: "1.5em", paddingTop:"50px", paddingLeft:"450px"}}>
                        <Button  href={`/${organization.id}/profile`} variant="outlined"  style={{width:"35%"}}>
                            View the organization profile
                        </Button>
                    </div>
                    <div style={{fontSize: "1.5em", paddingLeft:"450px"}}>
                        <CollaboratorsModal collaborator={""} nationality={""} button = "Add Collaborator" isNew="yes"></CollaboratorsModal>
                    </div>
                    <div style={{fontSize: "1.5em", paddingLeft:"450px"}}>
                        <CollaboratorsModal collaborator={"New Collaborator"} nationality={""} button = "Add Beneficiary" isNew="yes"></CollaboratorsModal>
                    </div>
                    <div style={{fontSize: "1.5em", paddingTop:"10px", paddingLeft:"20%", width:"80%"}}>
                        <Accordion style={{marginTop:"7%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Collaborators</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ height: 390, width:"900px", marginLeft:"13px" }}>
                                        <DataGrid rows={rows} columns={columns} pageSize={5} />
                                    </div>
                                </AccordionDetails>
                        </Accordion>
                        <Accordion style={{marginTop:"3%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Beneficiaries</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ height: 390, width:"900px", marginLeft:"13px" }}>
                                        <DataGrid rows={rows} columns={columns} pageSize={5} />
                                    </div>
                                </AccordionDetails>
                        </Accordion>
                        <Accordion style={{marginTop:"3%"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>List of Sponsors</Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ height: 390, width:"900px", marginLeft:"13px" }}>
                                        <DataGrid rows={rows} columns={columns} pageSize={5} />
                                    </div>
                                </AccordionDetails>
                        </Accordion>
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
          ) : (
            <h1>There is no organization with such name</h1>
          )}
        </NoSsr>
    )
  }

  export const getServerSideProps: GetServerSideProps = async context => {
    const { organizationId} = context.query
  
    const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organization/${organizationId}/`, {
      method: "GET",
    })
  
    const organization: Organization[] = await orgReq.json()
  
    return {
      props: { organization },
    }
  }
  export default Admin
