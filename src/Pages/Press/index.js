import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100%',
        marginTop: 50,
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
    },
    gridItemWrapper: {
       
    },
    logoImage: {
        
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            marginLeft: '25%'
        },
        [theme.breakpoints.down('md')]: {
            width: '40%',
            marginLeft: '30%'
        },
        [theme.breakpoints.up('md')]: {
            width: '15%',
            marginLeft: '42.5%',
        }
    },
    releaseItemGrid: {
        backgroundColor: 'black',
        height: 300,
        textAlign: 'center',
        color: '#fff'
    },
    soundcloudItem: {
        marginTop: 20
    }
}));
  
export function Press() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            Someone please interview me
        </Grid>
        
    )
  }

 