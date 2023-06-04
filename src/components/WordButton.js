import React from 'react';
import { Button } from 'react-bootstrap';

const WordButton = ({ word, onWordSelect }) => {
  return (
    <Button onClick={() => onWordSelect(word)}>
      {word}
    </Button>
  );
};

export default WordButton;
