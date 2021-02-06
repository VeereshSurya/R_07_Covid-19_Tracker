import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const FetchData = async (country) => {
  let ChangeableURL = url;

  if (country) {
    ChangeableURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(ChangeableURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const FetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const ModifiedData = data.map(({ totalConfirmed, reportDate, deaths }) => ({
      totalConfirmed: totalConfirmed,
      deaths: deaths.total,
      reportDate: reportDate,
    }));
    return ModifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const FetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
