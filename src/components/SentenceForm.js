import React from 'react';
import { Button } from 'react-bootstrap';

const SentenceForm = ({ onSubmit, sentence }) => {
  return (
    <div>
      <p>Finally review your sentence then submit <br /> <i>{sentence}</i></p>
      <Button onClick={onSubmit}>Submit Sentence</Button>
    </div>
  );
};

export default SentenceForm;
