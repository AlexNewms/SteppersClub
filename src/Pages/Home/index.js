import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmailCapture from './emailCapture'

const useStyles = makeStyles({
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
    gridItemTextWrapper: {
        textAlign: 'center',
        zIndex:1
    },
    gridEmailWrapper: {
        justifyContent: 'center',
        marginTop: -100,
        marginBottom: -70,
        zIndex:0
    },
    logoImage: {
        width: '15%',
        marginLeft: '42.5%'
    },
    homepageJoinMailing: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700
    },
    joinMailingText:{
        fontSize: 20,
        fontFamily: 'PixelLove',
        color:'black',
        textAlign: 'center',
        textDecoration: 'none'
    },
    socialMediaImageFacebook: {
        width: '105%',
        minWidth: 40
    },
    socialMediaImageSoundcloud: {
        width: '96.5%',
        position: 'relative',
        top: '2.25%',
        minWidth: 40
    },
    socialMediaImageInstagram: {
        width: '92%',
        position: 'relative',
        top: '4%',
        minWidth: 40,
        left:'6%'
    },
    gridSocialsWrapper: {
        justifyContent: 'center',
        marginTop: 10,
        zIndex:1
    },
    linkGridItem: {
        textAlign: 'center'
    },
    gridLinksWrapper: {
        marginTop: 0
    },
    homepageLinkToPage: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700,
    },
    homepageLink: {
        textDecoration: 'none'
    }
});
  
export function Home() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <img src='/Assets/Images/favicon.png' className={styles.logoImage}/>
            </Grid>
            <Grid item container xs={6} className={styles.gridLinksWrapper}>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/releases' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Releases</h1></a>
                </Grid>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/press' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Press</h1></a>
                </Grid>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/videos' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Videos</h1></a>
                </Grid>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/events' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Events</h1></a>
                </Grid>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/shop' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Shop</h1></a>
                </Grid>
                <Grid item xs={4} className={styles.linkGridItem}>
                    <a href='/contact' className={styles.homepageLink}><h1 className={styles.homepageLinkToPage}>Contact</h1></a>
                </Grid>
            </Grid>
            <Grid item xs={12} className={styles.gridItemTextWrapper}>
                <h2 className={styles.homepageJoinMailing}>JOIN THE CLUB</h2>
            </Grid>
            <Grid item container={12} className={styles.gridEmailWrapper}>
                <Grid item>
                    <EmailCapture/>
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2} className={styles.gridSocialsWrapper}>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.facebook.com/steppersclub/?__tn__=%2Cd%2CP-R&eid=ARDXn9RqkkPteWYgjOKLRrpdacbClosDVzoLDJUeXfWFVqT96vg1kiHco-9zT0PJE-kVRxsXjQEhj_XO'><img src='/Assets/Images/facebookIcon.png' className={styles.socialMediaImageFacebook}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.instagram.com/steppersclub_/'><img src='/Assets/Images/instagramLogo.png' className={styles.socialMediaImageInstagram}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://soundcloud.com/steppersclub'><img src='/Assets/Images/soundcloudLogo.png' className={styles.socialMediaImageSoundcloud}/></a></Grid>
            </Grid>
        </Grid>
        
    )
  }

 