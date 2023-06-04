import React from 'react';

const PreviousSentences = ({ sentences }) => {
  return (
    <div>
      <h3 className="text-center mt-5">Previous Sentences</h3>
      <ul>
        {sentences.map((sentences,index) => (
          <p key={index}>{sentences.id}. {sentences.sentence}</p>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSentences;
