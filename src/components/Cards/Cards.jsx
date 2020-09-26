import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Deaths from "./Card/DeathsCard";
import Recovereds from "./Card/RecoveredCard";
import Infecteds from "./Card/InfectedCard";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <Infecteds
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
        />
        <Recovereds
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
        />
        <Deaths
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
};

export default Info;
