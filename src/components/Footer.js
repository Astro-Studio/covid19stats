import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "190px",
  },
  typography: {
    fontSize: "2vmin",
    color: "white",

    marginTop: "50px",
    transition: ".5s ease",
  },
  typography2: {
    fontSize: "3vmin",
    color: "white",

    marginTop: "10px",
    transition: ".5s ease",
    "&:hover": {
      color: "#636ed6",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.typography}>
        "Stay Safe and Remember To Take All Precautions Advised by The W.H.O".
      </Typography>
      <Link
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
        target="_blank"
        className={classes.typography2}
        underline="none"
      >
        Click Here For More Information
      </Link>
    </div>
  );
}
