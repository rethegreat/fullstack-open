import { useEffect, useState } from "react";
import axios from 'axios';
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = (props) => {

  const [persons, setPersons] = useState(props.intialPersons);

  const [filteredPersons, setFilteredPersons] = useState(props.intialPersons);


  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [filterText, setFilterText] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    console.log(persons.filter((person) => person["name"] === newName));
    if (persons.filter((person) => person["name"] === newName).length > 0) {
      alert(newName + " is already added to phonebook");
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}));
      setFilteredPersons(filteredPersons.concat({name: newName, number: newNumber}));
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterText(event.target.value);
    const filterLength = event.target.value.length;
    const result = filteredPersons.filter((persons) => persons.name.substring(0, filterLength).toUpperCase() === event.target.value.toUpperCase());
    setFilteredPersons(result);
    
    console.log(result);
    
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={filterText} onChange={handleFilterChange}/>

      <h2>Add a new</h2>
      
      <PersonForm 
        onSubmit={addNote} newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        />

      <h2>Numbers</h2>
      
      <Persons filteredPersons={filteredPersons}/>

    </div>
  );
};

export default App;
