import {
    Container,
    Typography,
    NoSsr,
    Link,
  } from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles"
  import React from "react"
import { BasePageAboutMongen } from "../../components/templates"
import { LiveOrgModal } from "../../components/templates/DetailedInfoModal"
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid'

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
  
  function Organizations() {
    const classes = useStyles()  

    const columns: ColDef[] = [
      { field: 'orgName', headerName: 'Organization', width: 180 },
      { field: 'country', headerName: 'Country', width: 130 },
      {
        field: 'mainContact',
        headerName: 'Main Contact',
        width: 150,
      },
      {
        field: 'isVerified',
        headerName: 'Verified',
        width: 130,
      },
      {
        field: 'button',
        headerName: '.',
        renderCell: (params: ValueGetterParams) =>  (
          <LiveOrgModal org={params.getValue('orgName')}></LiveOrgModal>
         ),
        sortable: false,
        width: 150,
     },
    ];
    
    const rows = [
      { id: 1, orgName: 'Visible Children', country: 'Nigeria', mainContact: "Alex", isVerified: "yes" },
      { id: 2, orgName: 'Organization 1', country: 'Nigeria', mainContact: "James", isVerified: "yes" },
      { id: 3, orgName: 'Organization 2', country: 'Argentina', mainContact: "James", isVerified: "no" },
      { id: 4, orgName: 'Organization 3', country: 'Argentina', mainContact: "James", isVerified: "yes" },
      { id: 5, orgName: 'Organization 4', country: 'Nigeria', mainContact: "James", isVerified: "yes" },
      { id: 6, orgName: 'Organization 5', country: 'Nigeria', mainContact: "James", isVerified: "yes" },
      { id: 7, orgName: 'Organization 6', country: 'Uganda', mainContact: "Juan", isVerified: "yes" },
      { id: 8, orgName: 'Organization 7', country: 'Uganda', mainContact: "Jacob", isVerified: "yes" },
      { id: 9, orgName: 'Organization 8', country: 'Argentina', mainContact: "Wanda", isVerified: "no" },
    ];

    return (
        <NoSsr>
          <BasePageAboutMongen className={classes.rootLight}>
          <title>Admin | Mongen Initiative</title>
            <div>
                <Link style={{marginLeft:"7%"}} href="/admin"> &larr; Back to Admin Panel</Link>
                <Container maxWidth="sm" className={classes.heroContent}>
                    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
                        All organizations
                    </Typography>
                     <div style={{ height: 550, width:"900px", paddingTop:"50px", marginLeft:"-120px" }}>
                      <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
                    </div>
                </Container>
            </div>
          </BasePageAboutMongen>
        </NoSsr>
    )
  }
  
  export default Organizations
 