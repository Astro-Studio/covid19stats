import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    background:
      "linear-gradient(52deg, rgba(199,78,78,1) 0%, rgba(255,0,0,0.6166841736694677) 100%)",
    margin: "10px",
    transition: ".5s ease",
  },

  title: {
    fontFamily: "Rajdhani",
    fontSize: "25px",
    color: "#fff",
  },

  numbers: {
    fontFamily: "Rajdhani",
    fontSize: "30px",
    color: "#fff",
  },

  lastdate: {
    fontFamily: "Rajdhani",
    fontSize: "16px",
    color: "#ddd",
  },
});

export default function Deaths({ cardTitle, value, lastUpdate }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {cardTitle}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.numbers}
        >
          {" "}
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.lastdate}
        >
          {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
