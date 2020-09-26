import React from "react";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chart2 from "./components/Chart/Chart2";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <CssBaseline />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart2 data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
