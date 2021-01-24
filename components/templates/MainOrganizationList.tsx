import { Container, Grid, Link, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import React from "react";
import getOrganizations from "../../data/Organizations";
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
    const { loading, noData, organizations } = getOrganizations()

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
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>
                                {organizations.map((org) => (
                                    <Grid item key={org.id} xs={12} sm={6} md={4}>
                                        <Link href={`/${org.id}`} underline="none">
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={org.collaborator.photoIdURL}
                                                    title={`${org.collaborator.firstName} ${org.collaborator.lastName}`}
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {org.name}
                                                    </Typography>
                                                    <Typography variant="subtitle2">
                                                        {`${org.mission}`}
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {`${org.vision}`}
                                                    </Typography>
                                                    <Typography variant="overline">
                                                        This Organization works with us. Click to view their website
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" href={`/${org.id}`} style={{ color: MuiTheme.palette.primary.main }}>
                                                        Learn more
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    )
                }
            </div>
        )
    }
}
