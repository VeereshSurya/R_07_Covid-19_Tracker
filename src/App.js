import React, { Component } from "react";
import { FetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";

import Covid from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const FetchedData = await FetchData();
    this.setState({
      data: FetchedData,
    });
  }

  HandleCountryChange = async (country) => {
    const FetchedData = await FetchData(country);
    this.setState({ data: FetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={Covid} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker HandleCountryChange={this.HandleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
