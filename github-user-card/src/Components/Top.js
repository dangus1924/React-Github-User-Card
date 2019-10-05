import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    box: {
        backgroundColor: '#4B4E6D',
        color: 'white',
        padding: 25,
        paddingBottom: 10,        
        
    },
    title: {
        color: 'white',
    },
})

const Top = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box} display='flex' justifyContent='center'>
            <h1 className={classes.title}>Github UserCards</h1>
        </Box>
    )
}

export default Top;