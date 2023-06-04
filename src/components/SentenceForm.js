import React from 'react';
import { Button } from 'react-bootstrap';

const SentenceForm = ({ onSubmit }) => {
  return (
    <div>
      <Button onClick={onSubmit}>Submit Sentence</Button>
    </div>
  );
};

export default SentenceForm;
