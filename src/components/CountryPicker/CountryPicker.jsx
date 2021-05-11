import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/index";
import styles from "./CountryPicker.module.css";

export const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetechCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetechCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetechCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
