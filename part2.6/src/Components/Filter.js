import { useState } from "react";

const Filter = () => {
  return (
    <p>
      filter shown with
      <input value={filterText} onChange={handleFilterChange} />
    </p>
  );
};

export default Filter;
