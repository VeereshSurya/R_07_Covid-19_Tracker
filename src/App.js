import React, { Component } from "react";
import { FetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const FetchedData = await FetchData();
    console.log(FetchedData);
    this.setState({
      data: FetchedData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
