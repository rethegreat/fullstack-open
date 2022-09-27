import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [filterText, setFilterText] = useState("");

  const [countryData, setCountryData] = useState([]);

  const [filteredCountryData, setFilteredCountryData] = useState([]);

  const [countryList, setCountryList] = useState([]);


  useEffect(() => {
    console.log("effect");

    axios
      .get("http://restcountries.com/v3.1/all", { mode: "no-cors" })
      .then((response) => {
        console.log("promise fulfilled");

        

        setCountryData(response.data);
        setFilteredCountryData(response.data);
        
        setCountryList(response.data.map(x => x.name.common))
      });
    
    
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    const filterLength = event.target.value.length;
    const result = filteredCountryData.filter((countryData) => countryData.name.common.substring(0, filterLength).toUpperCase() === event.target.value.toUpperCase());
    setFilteredCountryData(result)
    setCountryList(countryList.filter((countryData) => countryData.substring(0, filterLength).toUpperCase() === event.target.value.toUpperCase()))

    
      
  };

  

  return (
    <div>
      <h4>
        Find Countries{" "}
        <input value={filterText} onChange={handleFilterChange} />
      </h4>
    
      {countryList.length > 10 && <p>Too many matches, specify another filter</p>}
      {countryList.length < 10 && countryList.map((country) => <p key={country}>{country}</p>)}
    </div>
  );
}

export default App;
