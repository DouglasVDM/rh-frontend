import React from 'react';

const SentenceDisplay = ({ sentence }) => {
  return (
    <div>
      <p>Selected Words: {sentence.sentence}</p>
    </div>
  );
};

export default SentenceDisplay;
