import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CounUp from "react-countup";
import cx from "classnames";

export const CardComponent = (title) => {
  const formattedDate = new Date(title.date).toDateString();

  return (
    <Grid item component={Card} xs={12} md={3} className={cx(title.style)}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title.title}
        </Typography>
        <Typography variant="h5">
          <CounUp start={0} end={title.data} duration={0.7} separator="." />
        </Typography>
        <Typography color="textSecondary">{formattedDate}</Typography>
        <Typography variant="body2">
          Number of active cases of COVID-19
        </Typography>
      </CardContent>
    </Grid>
  );
};
