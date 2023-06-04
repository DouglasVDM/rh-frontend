import React from 'react';

const SentenceDisplay = ({ sentences }) => {
  return (
    <div>
      <p>Next step is to click your selected words above to formulate your sentence{sentences.sentence}</p>
    </div>
  );
};

export default SentenceDisplay;
