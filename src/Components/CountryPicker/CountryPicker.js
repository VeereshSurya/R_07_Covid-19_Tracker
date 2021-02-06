import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { FetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ HandleCountryChange }) => {
  const [FetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const FetchCountry = async () => {
      setFetchedCountries(await FetchCountries());
    };
    FetchCountry();
  }, []);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => HandleCountryChange(e.target.value)}
        >
          <option value=""> Global </option>
          {FetchedCountries.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
