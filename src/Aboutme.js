import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    heading: {
        padding: theme.spacing(2),
        background: 'linear-gradient(90deg, #fa05ff 1%, #73053b 30%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#eff1f3',
    },
}));

function Aboutme(){
    const classes = useStyles();

    return (
        <div className="Header">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.heading}>About Me</Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Paper className={classes.paper}>
                                :) -insert image here-
                            </Paper>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={8}>
                    <Paper className={classes.paper}>
                        My name is Curtis Liu and I am a recent graduate from Simon Fraser University.
                        I studied Computer Science and majored in Software Systems.
                        Hopefully this website will let you get to know me more; including my personal
                        projects and hobbies.
                        This page will have a React and Material-UI front-end and a Rails backend as I
                        develope more features.  It will be an ongoing project.
                        </Paper>
                </Grid>
                {/* <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default Aboutme;



