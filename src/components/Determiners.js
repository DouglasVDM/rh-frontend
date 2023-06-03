import React, { useState } from "react";
import Select from "react-select";

const Determiners = ({determiners, onSelectDeterminer}) => {
    const [selectedDeterminer, setSelectedDeterminer] = useState(null);
    
    const determinerOptions = determiners.map((determiner) => ({
        value: determiner.determiner_id,
        label: determiner.determiner_name,
      }));
    
      const handleSelectChange = (determiner) => {
        setSelectedDeterminer(determiner);
        onSelectDeterminer(determiner.label);
      };
    
      return (
        <div className="container">
          <h1>Determiners</h1>
          <Select
            value={selectedDeterminer}
            options={determinerOptions}
            onChange={handleSelectChange}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      );
    };

export default Determiners