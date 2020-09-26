import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "20px",
  },
  typography: {
    fontSize: "4vmin",
    color: "white",
    marginRight: "20px",
    marginTop: "50px",
    transition: ".5s ease",
  },
  typography2: {
    fontSize: "4vmin",
    color: "white",

    marginTop: "50px",
    fontFamily: "Satisfy",
    transition: ".5s ease",
    "&:hover": {
      color: "#636ed6",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.typography}>CovidWatch by</Typography>
      <Link
        href="http://www.astrostudio.tk/"
        target="_blank"
        className={classes.typography2}
        underline="none"
      >
        AstroStudio.
      </Link>
    </div>
  );
}
