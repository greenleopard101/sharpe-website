import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
    width: "22%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gradStudent, setGradStudent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email) {
      console.log(firstName, lastName, email, gradStudent);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentTurnedInIcon />
        </Avatar>
        <Typography component="h1" variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography align="center">
          Membership to join Sharpe is free, and open to all active graduate
          students in the Northeastern University community. To become a Member,
          please fill the form below and we will approve your membership. After
          you have signed up, you will receive email updates from us regarding
          upcoming events and opportunities.
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
                label="NU Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.field}>
                <FormLabel>Are you a current NU Graduate student?</FormLabel>
                <RadioGroup
                  value={gradStudent}
                  onChange={(e) => {
                    setGradStudent(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I consent to receiving emails from Sharpe"
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
