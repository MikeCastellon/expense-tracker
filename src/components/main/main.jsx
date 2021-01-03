import React, { useContext } from 'react';
import useStyles from './styles';

import { Card, CardHeader, Typography, CardContent, Grid, Divider } from '@material-ui/core';
import Form from './form/form';
import List from './list/list';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../infocard';



const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)
    
    return (
       <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h6'>Total Balance $ {balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight:'1.5em', marginTop: '10px' }}>
                    <InfoCard /> 
                </Typography> 
                <Divider className={classes.divider}/>
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
