import React, { useState } from "react";
import Select from "react-select";

const ListNouns = ({ nouns, onSelectNoun }) => {
  const [selectedNoun, setSelectedNoun] = useState(null);

  const nounOptions = nouns.map((noun) => ({
    value: noun.noun_id,
    label: noun.noun_name,
  }));

  const handleSelectChange = (noun) => {
    setSelectedNoun(noun);
    onSelectNoun(noun.label);
  };

  return (
    <div className="container">
      <h1>Nouns Dropdown</h1>
      <Select
        value={selectedNoun}
        options={nounOptions}
        onChange={handleSelectChange}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default ListNouns;
