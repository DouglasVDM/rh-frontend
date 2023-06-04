import React from 'react';

const PreviousSentences = ({ sentence }) => {
  return (
    <div>
      <h3>Previous Sentences:</h3>
      <ul>
        {sentence.map((sentence) => (
          <li key={sentence.id}>{sentence.sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSentences;
