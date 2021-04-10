import {
    Container,
    Typography,
    NoSsr,
    Link,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen } from "../../components/templates"
import { OrgModal } from "../../components/templates/DetailedInfoModal"
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid'
import { Organization } from "../[organizationName]"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Button } from "@material-ui/core"

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
  
  function Organizations({ organizations }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const classes = useStyles(organizations)  

    const columns: ColDef[] = [
      { field: 'id', headerName: 'Org id', width: 95 },
      { field: 'name', headerName: 'Organization', width: 180 },
      { field: 'country', headerName: 'Country', width: 130 },
      {
        field: 'main_contact.first_name',
        headerName: 'Main Contact',
        width: 150,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
      },
      {
        field: 'button2',
        headerName: '*',
        renderCell: () =>  (
          <OrgModal org={organizations[0]} button="yes"></OrgModal>
         ),
        sortable: false,
        width: 150,
     },
    {
      field: 'button3',
      headerName: '*',
      renderCell: (params: ValueGetterParams) =>  (
        <Button variant="outlined" href={`/${params.getValue('id')}/admin`}>Org admin</Button>
       ),
      sortable: false,
      width: 150,
    },
    ];

    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div style={{marginTop:"30px"}}>
                <Link style={{marginLeft:"7%"}} href="/admin"> &larr; Back to Admin Panel</Link>
                <Container maxWidth="md" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                        All organizations
                    </Typography>
                    <div style={{border:"1px solid", paddingTop:"30px", paddingBottom:"40px", paddingLeft:"30px", marginBottom:"30px", marginTop:"50px", width:"100%"}}>
                      <Typography align="center" color="primary" style={{marginBottom:"20px"}}> The flow: </Typography>
                      <Typography color="primary"> 1. User sends a request to create an organization, it is created as  <span style={{fontWeight:"bolder"}}>Draft.</span></Typography>
                      <Typography color="primary"> 2. Mongen Admin approves an organization by clicking "Summary" &#8211;&#62;	 Approve.</Typography>
                      <Typography color="primary"> 3. The organization becomes <span style={{fontWeight:"bolder"}}>Pending</span>. Org main contact gets a link to the org admin page.</Typography>
                      <Typography color="primary"> 4. Organization Admin can edit and publish the organization. It becomes <span style={{fontWeight:"bolder"}}>Published</span>. The website page is now available to anyone in the web.</Typography>
                      <Typography color="primary"> 5. Mongen Admin can also mark a suspicious org as <span style={{fontWeight:"bolder"}}>Under Review</span>. The website page is still available to anyone in the web.</Typography>
                      <Typography color="primary"> 6. Mongen Admin can also mark an org as <span style={{fontWeight:"bolder"}}>Disabled</span>. The website page is then becomes unavailable.</Typography>
                    </div>
                     <div style={{ height: 550, width:"1100px", paddingTop:"50px", marginLeft:"-10%"}}>
                      <DataGrid rows={organizations} columns={columns} pageSize={7} checkboxSelection />
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export const getServerSideProps: GetServerSideProps = async () => {
    const orgReq = await fetch(`${process.env.mongenCoreInternal}/api/v1/organizations`, {
      method: "GET",
    })
    const organizations: Organization[] = await orgReq.json()
  
    return {
      props: { organizations },
    }
  }
  
  export default Organizations
