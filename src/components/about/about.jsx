import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/button";
import YoutubeEmbed from "../../video/YouTubeEmbed";
import { useHistory } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "80vh",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    marginTop: 70,
    marginBottom: 5,
  },
  divider: {
    width: "26%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();

  let history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <InfoIcon />
        </Avatar>
        <Typography component="h1" variant="h4" gutterBottom>
          About Us
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography align="center">
          Sharpe is a graduate student led FinTech Initiative at Northeastern
          University. Sharpe’s mission is to enable graduate students in the
          Northeastern University community to learn more about FinTech, explore
          career opportunities, and develop specific technical skillsets in a
          diverse range of related topics. We host speaker events with faculty
          and professionals from the industry, conduct technical workshops, and
          host networking events to provide members with ample opportunities to
          delve deeper into this exciting field. Membership to join Sharpe is
          free, and open to all active graduate students in the Northeastern
          University community.
        </Typography>
        <Button
          onClick={handleClick}
          className={classes.field}
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
        >
          Sign Up
        </Button>
        <YoutubeEmbed  embedId={}/>
      </div>
    </Container>
  );
}
