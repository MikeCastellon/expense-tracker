import React from 'react';
import useStyles from './styles';

import { Card, CardHeader, Typography, CardContent, Grid, Divider } from '@material-ui/core';
import Form from './form/form';
import List from './list/list';


const Main = () => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h5'> Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight:'1.5em', marginTop: '20px' }}>
                    Try Saying: Add income $100 dollars category salary for Monday... 
                </Typography>
                <Divider />
                <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
       </Card>
    )
}

export default Main
