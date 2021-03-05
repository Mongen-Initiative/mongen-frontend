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
import { Organization } from "../[organizationId]"
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
      { field: 'name', headerName: 'Organization', width: 180 },
      { field: 'country', headerName: 'Country', width: 130 },
      {
        field: 'main_contact',
        headerName: 'Main Contact',
        valueFormatter: ({ value }) => value.first_name + " " + value.last_name,
        width: 150,
      },
      {
        field: 'verified',
        headerName: 'Verified',
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
      field: 'button1',
      headerName: '*',
      renderCell: (params: ValueGetterParams) =>  (
        <Button variant="outlined" href={`/${params.getValue('id')}/profile`}>Edit</Button>
       ),
      sortable: false,
      width: 100,
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
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                        All organizations
                    </Typography>
                     <div style={{ height: 550, width:"1100px", paddingTop:"50px", marginLeft:"-200px"}}>
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
