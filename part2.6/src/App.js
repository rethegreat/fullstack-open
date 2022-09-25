import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filteredPersons, setFilteredPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  

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

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with
        <input value={filterText} onChange={handleFilterChange} />
      </p>
      <h2>Add a new</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <h5 key={person.name}>
          {person.name} {person.number}
        </h5>
      ))}
    </div>
  );
};

export default App;
