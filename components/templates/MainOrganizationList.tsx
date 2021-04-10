import { Container, Grid, Link, Card, CardMedia, CardContent, Typography, CardActions, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import React from "react";
import getOrganizationsByStatus from "../../data/OrganizationsByStatus";
import { MuiTheme } from "../MuiTheme";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 1, 1),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    rootLight: {
        flexGrow: 1,
    },
}));

export const MainOrganizationList = function() {
    const { loading, noData, organizations } = getOrganizationsByStatus("Published")

    const classes = useStyles()

    if (noData) {
        return (
            <></>
        )
    } else {
        return (
            <div>
                {" "}
                {loading ? (
                    "Loading organizations..."
                ) : (
                    <div>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:"40%", marginTop:"30px", marginBottom:"30px"}}>
                        Organizations working with us
                    </Typography>
                    <Divider />
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>
                                {organizations.map((org) => (
                                    <Grid item key={org.id} xs={12} sm={6} md={4}>
                                        <Link href={`/${org.seo_name}`} underline="none">
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={org.logo_url}
                                                    title={org.name}
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {org.name}
                                                    </Typography>
                                                    <Typography >
                                                        {org.mission}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                        </div>
                    )
                }
            </div>
        )
    }
}
