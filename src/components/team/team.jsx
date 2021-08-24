import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import Archit from "../../images/LinkedIn.jpeg";
import Sidd from "../../images/Sidd.jpeg";
import Khalid from "../../images/Khalid.jpeg";
import David from "../../images/David.jpeg";
import Maria from "../../images/Maria.jpeg";
import Adam from "../../images/Adam.jpeg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 343,
    maxHeight: "60vh",
    margin: "auto",
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
    height: 350,
    paddingBottom: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    width: "100vw",
    boxShadow: "none",
    textAlign: "center",
    paddingTop: "50px",
  },
}));

export const Team = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Grid container spacing={3}>
      <Paper className={styles.title}>
        <Typography component="h1" variant="h4" gutterBottom>
          Team
        </Typography>
      </Paper>
      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={Khalid}
              title="Khalid"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"Khalid Khan"}
                overline={"VP of Operations"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/khalidayazkhan/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={Sidd}
              title="Sidd"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"Sidd Pant"}
                overline={"President"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/sidd-pant/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={Archit}
              title="Archit"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"Archit Manek"}
                overline={"VP of Marketing"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/architmanek/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={David}
              title="David"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"David Jamrog"}
                overline={"Director of Learning Initiatives"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/david-jamrog-139a9387/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={Maria}
              title="Maria"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"Maria Georgieva"}
                overline={"Director of Content"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/maria-georgieva/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={styles.paper}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={cx(styles.media, mediaStyles.root)}
              src={Adam}
              title="Adam"
              component="img"
            />
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"Adam Foley"}
                overline={"Director of Finance"}
                body={
                  <LinkedInIcon
                    color="primary"
                    fontSize="large"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/afoley1/",
                        "_blank"
                      );
                    }}
                    cursor="pointer"
                  ></LinkedInIcon>
                }
              />
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
});
export default Team;
