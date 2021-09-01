import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { db } from "../../firebase";

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
    marginTop: 15,
    marginBottom: 5,
  },
  divider: {
    width: "57%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

export default function Alumni() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [major, setMajor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("alumni")
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        month: month,
        year: year,
        major: major,
      })
      .then(() => alert("Message has been sent!"))
      .catch((err) => {
        alert(err);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setMajor("");
    setMonth("");
    setYear("");
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentTurnedInIcon />
        </Avatar>
        <Typography component="h1" variant="h4" gutterBottom>
          Alumni Engagement
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography align="center">
          Northeastern University ALUMNI are welcome to sign up to stay
          connected and get updates about our events. Please fill the form
          below.
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
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setMonth(e.target.value)}
                name="month"
                variant="outlined"
                required
                fullWidth
                id="month"
                label="Graduation Month (MM)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setYear(e.target.value)}
                name="year"
                variant="outlined"
                required
                fullWidth
                id="year"
                label="Graduation Year (YYYY)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setMajor(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="major"
                label="Major"
                name="major"
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>How would you like to contribute?</FormLabel>
              <TextField
                // onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                id="interests"
                label="Your Interests"
                name="interests"
                multiline
                fullWidth
                rows={8}
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Button
            className={classes.field}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
