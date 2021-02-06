import React, { useState, useEffect } from "react";
import { FetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [DailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FethApi = async () => {
      setDailyData(await FetchDailyData());
    };

    FethApi();
  }, []);

  const LineChart = DailyData[0] ? (
    <Line
      data={{
        labels: DailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            label: "confirmed",
            data: DailyData.map(({ totalConfirmed }) => totalConfirmed),
            borderColor: "#3333ff",
            fill: true,
          },
          {
            label: "Deaths",
            data: DailyData.map(({ deaths }) => deaths),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const BarChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: [
              "rgba(0, 0, 250, 0.5)",
              "rgba(0, 250, 0, 0.5)",
              "rgba(250, 0, 0, 0.5)",
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;

  console.log(data);

  return (
    <div className={styles.container}>{country ? BarChart : LineChart}</div>
  );
};

export default Chart;
