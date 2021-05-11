import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import { CardComponent } from "./Card/CardComponent";

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          title="Infected"
          data={confirmed.value}
          date={lastUpdate}
          style={styles.infected}
        />
        <CardComponent
          title="Recovered"
          data={recovered.value}
          date={lastUpdate}
          style={styles.recovered}
        />
        <CardComponent
          title="Deaths"
          data={deaths.value}
          date={lastUpdate}
          style={styles.deaths}
        />
      </Grid>
    </div>
  );
};
