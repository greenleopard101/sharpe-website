import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";

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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // display: "block",
  },
  divider: {
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email) {
      console.log(firstName, lastName, email, message);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactMailIcon />
        </Avatar>
        <Typography component="h1" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography align="center">
          If you have any questions or want to get involved, shoot us a message
          and we will get back to you very soon.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                label="Message"
                name="message"
                multiline
                fullWidth
                rows={8}
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.field}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
}
