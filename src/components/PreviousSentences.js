import React from 'react';

const PreviousSentences = ({ sentences }) => {
  return (
    <div>
      <h3 className="text-center mt-5">Previous Sentences</h3>
      <ul>
        {sentences.map((sentence) => (
          <p key={sentence.id}>{sentence.id}. {sentence.sentence}</p>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSentences;