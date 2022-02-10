import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Archit from "../../images/Archit.jpeg";
import Sidd from "../../images/Sidd.jpeg";
import Khalid from "../../images/Khalid.jpeg";
import David from "../../images/David.jpeg";
import Maria from "../../images/Maria.jpeg";
import Adam from "../../images/Adam.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "auto",
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  team: {
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(4, 0, 4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  divider: {
    width: "16%",
    margin: "auto",
    backgroundColor: theme.palette.primary.main,
  },
}));

const cards = [
  {
    name: "Khalid Khan",
    heading: "President",
    photo: Khalid,
    link: "https://www.linkedin.com/in/khalidayazkhan/",
  },
  {
    name: "Maria Georgieva",
    heading: "Vice President",
    photo: Maria,
    link: "https://www.linkedin.com/in/maria-georgieva/",
  },
  {
    name: "Adam Foley",
    heading: "Director of Finance",
    photo: Adam,
    link: "https://www.linkedin.com/in/afoley1/",
  },
  {
    name: "David Jamrog",
    heading: "Director of Learning Initiatives",
    photo: David,
    link: "https://www.linkedin.com/in/david-jamrog-139a9387/",
  },
  {
    name: "Maria Georgieva",
    heading: "Director of Content",
    photo: Maria,
    link: "https://www.linkedin.com/in/maria-georgieva/",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.team}>
          <Container maxWidth="sm">
            <Avatar className={classes.icon}>
              <PeopleOutlineIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Team
            </Typography>
            <Divider variant="middle" className={classes.divider} />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    src={card.photo}
                    title="Image title"
                    component="img"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.heading}</Typography>
                  </CardContent>
                  <CardActions style={{ margin: "auto" }}>
                    <LinkedInIcon
                      color="primary"
                      fontSize="large"
                      onClick={() => {
                        window.open(card.link, "_blank");
                      }}
                      cursor="pointer"
                    ></LinkedInIcon>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
