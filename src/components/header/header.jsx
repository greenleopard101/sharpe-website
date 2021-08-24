import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Logo from "../../images/sharpe-logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    marginTop: theme.spacing(1),
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    background: "#3f50b5",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "white",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography align="center" noWrap className={classes.toolbarTitle}>
          <img src={Logo} alt="sharpe logo" height="80" width="300" />
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
