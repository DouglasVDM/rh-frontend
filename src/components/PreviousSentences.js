import React from 'react';

const PreviousSentences = ({ sentences }) => {
  return (
    <div>
      <h3>Previous Sentences:</h3>
      <ul>
        {sentences.map((sentence) => (
          <li key={sentence.id}>{sentence.sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSentences;
