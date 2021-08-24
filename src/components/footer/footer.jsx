import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  social: {
    fill: "white",
    marginRight: "5px",
    marginLeft: "5px",
    cursor: "pointer",
    fontSize: "28px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Sharpe
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <InstagramIcon
            className={classes.social}
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          />
          <LinkedInIcon
            className={classes.social}
            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
          />
          <MailOutlineIcon
            className={classes.social}
            onClick={() => (window.location = "mailto:neusharpe@gmail.com")}
          />
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
