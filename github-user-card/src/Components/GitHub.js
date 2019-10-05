import React from 'react';
import GitChart from 'github-calendar';
import { makeStyles, Card, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    cardHidden: {
        display: 'none',
    },
    cardVisible: {
        maxWidth: 700,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
    },
    media: {
        height: 140,
    },
});

const GithubChart = ( { user, contributionsOn, toggleContributions } ) => {

    GitChart('.calendar', user.login, {responsive: true});

    const classes = useStyles();

    return (
        <Card onClick={toggleContributions} className={contributionsOn ? classes.cardVisible : classes.cardHidden}>
            <CardActionArea className='calendar'>
                
            </CardActionArea>
        </Card>
    );
};

export default GithubChart;