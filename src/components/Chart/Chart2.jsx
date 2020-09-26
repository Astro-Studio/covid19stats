import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import styles from "./Chart2.module.css";

const Chart2 = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const doughnutChart = confirmed ? (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(44, 68, 179)",
              "rgb(44, 179, 96)",
              "rgb(163, 37, 37)",
            ],
            borderColor: "transparent",
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          fontColor: "white",
          fontSize: 50,
          fontFamily: "Rajdhani",
          text: ` ${country}`,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? doughnutChart : doughnutChart}
    </div>
  );
};

export default Chart2;
