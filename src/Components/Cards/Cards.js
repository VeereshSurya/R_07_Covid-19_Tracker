import React from "react";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";

// Destructuring of props
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // Waits to Fetch data and shows Loading...
  if (!confirmed) {
    return "Loading";
  }

  return (
    // Cards main container
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* Infected Card details */}

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>

            <Typography varient="h5">
              {/* CountUp is to show number animations */}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>

            {/* last Updated data  */}

            <Typography color="textSecondary">
              Data : {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography varient="body2">
              Number of active cases of covid-19
            </Typography>
          </CardContent>

          {/* end of the first card (Infected) */}
        </Grid>

        {/* No of recoveries ! second card */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>

            {/* CountUp is to show number animations */}
            <Typography varient="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>

            {/* last updated date */}
            <Typography color="textSecondary">
              Data : {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography varient="body2">
              Number of recoveries of covid-19
            </Typography>
          </CardContent>
        </Grid>

        {/* No of Deaths! Third card */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>

            <Typography varient="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>

            <Typography color="textSecondary">
              Data : {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography varient="body2">
              Number of deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
