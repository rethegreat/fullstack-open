import { useState } from "react";

const Persons = ({filteredPersons}) => {
    return (
        <div>
        {filteredPersons.map((person) => (
            <h5 key={person.name}>
              {person.name} {person.number}
            </h5>
          ))}
        </div>
    );
}

export default Persons