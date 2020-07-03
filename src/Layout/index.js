import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridContentWrapper: {
        minHeight: 'Calc(100vh-100px)',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    },
    comingSoonGif: {
        height: '90vh'
    },
    comingSoonGifWrapper: {
        boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.2), 0px 0px 10px 10px rgba(255, 255, 255, 0.2)',
        height: '90vh',
        marginTop: 50,
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <div className={styles.comingSoonGifWrapper}>
                <img src='/Assets/Images/ComingSoonGif.gif' className={styles.comingSoonGif}/>
            </div>
            <Grid item xs={8}>
                { props.children }
            </Grid>
        </Grid>
    )
  }