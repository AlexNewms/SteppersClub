import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden, Slide } from "@material-ui/core";
import EmailCapture from "./emailCapture";
import { LogoMain } from "../LogoMain";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    direction: "column",
    flexGrow: "column",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
  },
  gridItemWrapper: {},
  gridItemTextWrapper: {
    textAlign: "center",
    zIndex: 1,
    marginTop: 20,
  },
  gridEmailWrapper: {
    justifyContent: "center",
    zIndex: 0,
    marginTop: -100,
    marginBottom: -200,
    [theme.breakpoints.up("sm")]: {
      minHeight: 400,
    },
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginBottom: -120,
      marginTop: -50,
    },
    [theme.breakpoints.down(481)]: {
      right: 16,
    },
    [theme.breakpoints.down(768)]: {
      marginTop: -50,
      marginBottom: -150,
      minHeight: 250,
    },
  },
  homepageJoinMailing: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
  },
  joinMailingText: {
    fontSize: 20,
    fontFamily: "PixelLove",
    color: "black",
    textAlign: "center",
    textDecoration: "none",
  },
  socialMediaImageFacebook: {
    marginLeft: "12%",
    width: "75%",
    minWidth: 40,
  },
  socialMediaImageYoutube: {
    width: "80%",
    marginLeft: "5%",
    minWidth: 40,
  },
  socialMediaImageSoundcloud: {
    width: "70%",
    position: "relative",
    top: "2.25%",
    marginLeft: "13%",
    minWidth: 40,
  },
  socialMediaImageInstagram: {
    width: "66%",
    marginLeft: "17%",
    position: "relative",
    top: "4%",
    minWidth: 40,
    left: "6%",
  },
  gridSocialsWrapper: {
    justifyContent: "center",
    marginTop: 10,
    zIndex: 1,
    marginBottom: 50,
  },
  linkGridItem: {
    textAlign: "center",
    marginTop: 10,
  },
  gridLinksWrapper: {
    marginTop: 50,
    zIndex: 1,
  },
  gridContactWrapper: {
    justifyContent: "center",
    zIndex: 1,
    textAlign: "center",
    marginBottom: 30,
  },
  homepageLinkText: {
    textDecoration: "none",
    color: "rgb(42, 0, 141)",
    textShadow: "2px 2px rgb(255,209,76)",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
  },
  homepageLinkImage: {},
  homepageImageButton: {
    transition: "0.3s",
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.05)",
        transition: "0.5s",
      },
    },
    "&:active": {
      transition: "0.1s",
      transform: "scale(0.90)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      "&:active": {
        width: "55%",
        marginTop: "2%",
      },
    },
  },
  homepageImageButtonSmall: {
    width: "100%",
    "&:active": {
      width: "95%",
      marginTop: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      "&:active": {
        width: "55%",
        marginTop: "2%",
      },
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.05)",
        transition: "0.5s",
      },
    },
  },
  gridRightSticker: {
    position: "absolute",
    left: "83%",
    top: "60%",
  },
  stickerImage: {
    width: "55%",
    transform: "rotate(20deg)",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05) rotate(20deg)",
    },
  },
}));

export function Home() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item container xs={10} className={styles.gridLinksWrapper}>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/releases" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="RELEASES"
              src="/Assets/Images/releases.png"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/press" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="PRESS"
              src="/Assets/Images/press.png"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/videos" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="VIDEOS"
              src="/Assets/Images/videos.png"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/events" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="EVENTS"
              src="/Assets/Images/events.png"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/shop" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="SHOP"
              src="/Assets/Images/shop.png"
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
          <a href="/roster" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButton}
              alt="ROSTER"
              src="/Assets/Images/roster.png"
            />
          </a>
        </Grid>
      </Grid>
      <Grid item xs={12} className={styles.gridItemTextWrapper}>
        <Fade in={true} timeout={1000}>
          <h2 className={styles.homepageJoinMailing}>JOIN THE CLUB:</h2>
        </Fade>
      </Grid>
      <Grid item container xs={8} sm={12} className={styles.gridEmailWrapper}>
        <Fade in={true} timeout={1500}>
          <Grid item>
            <EmailCapture />
          </Grid>
        </Fade>
      </Grid>
      <Grid
        item
        container
        xs={8}
        sm={8}
        spacing={2}
        className={styles.gridSocialsWrapper}
      >
        <Grid item xs={3} sm={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/steppersclub/?__tn__=%2Cd%2CP-R&eid=ARDXn9RqkkPteWYgjOKLRrpdacbClosDVzoLDJUeXfWFVqT96vg1kiHco-9zT0PJE-kVRxsXjQEhj_XO"
          >
            <img
              src="/Assets/Images/facebookIcon.png"
              alt="FACEBOOK"
              className={styles.socialMediaImageFacebook}
            />
          </a>
        </Grid>
        <Grid item xs={3} sm={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/steppersclub_/"
          >
            <img
              src="/Assets/Images/instagramLogo.png"
              alt="INSTAGRAM"
              className={styles.socialMediaImageInstagram}
            />
          </a>
        </Grid>
        <Grid item xs={3} sm={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/steppersclub"
          >
            <img
              src="/Assets/Images/soundcloudLogo.png"
              alt="SOUNDCLOUD"
              className={styles.socialMediaImageSoundcloud}
            />
          </a>
        </Grid>
        <Grid item xs={3} sm={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCmmzif8Hf1zQ6AhPbeJv86w?fbclid=IwAR2944u6hogl83Jv0Kg2GwZgXb7S5SniTogcLqKSDwqrYtSTllQJ2a-nl0s"
          >
            <img
              src="/Assets/Images/youtubeIcon.png"
              alt="YOUTUBE"
              className={styles.socialMediaImageYoutube}
            />
          </a>
        </Grid>
      </Grid>
      <Grid item xs={12} container className={styles.gridContactWrapper}>
        <Grid
          item
          xs={8}
          sm={4}
          md={2}
          lg={2}
          className={styles.gridContactWrapper}
        >
          <a href="/contact" className={styles.homepageLinkImage}>
            <img
              className={styles.homepageImageButtonSmall}
              alt="CONTACT"
              src="/Assets/Images/contact.png"
            />
          </a>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Slide direction="left" in={true} timeout={700}>
          <Grid item xs={12} container className={styles.gridRightSticker}>
            <a
              href="https://ampl.ink/N99ZM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Assets/Images/artworkSticker.png"
                className={styles.stickerImage}
              />
            </a>
          </Grid>
        </Slide>
      </Hidden>
    </Grid>
  );
}
