import React from 'react';
import { Form } from 'react-bootstrap';

const WordTypeSelect = ({ wordTypes, onWordTypeChange }) => {
  return (
    <Form.Select onChange={onWordTypeChange}>
      <option value="">Select word type</option>
      {/* Render the available word types */}
      {wordTypes.map((wordType) => (
        <option key={wordType.id} value={wordType.id}>
          {wordType.word_type}
        </option>
      ))}
    </Form.Select>
  );
};

export default WordTypeSelect;
