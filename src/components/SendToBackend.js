import React, { useState } from "react";

const SendToBackend = ({ selectedNoun, selectedDeterminer }) => {
  const [sentence_name, setSentence_name] = useState(selectedNoun);
  const [determiner_name, setDeterminer_name] = useState(selectedDeterminer);

  const sendToBackend = async () => {
    try {
      console.log("selectedNoun", selectedNoun);
      setSentence_name(selectedNoun);
      setDeterminer_name(selectedDeterminer);
      const body = { determiner_name, sentence_name };

      // Need to find a way around hardcoding this url. When clicking the send button, the url used is http://localhost:3000/indefined/sentences and not the baseUrl specified by in App.js.
      const response = await fetch("http://localhost:5000/api/v1/sentences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      window.location = '/';
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="col-md-12 text-center">
      <button className="btn btn-primary " onClick={sendToBackend}>
        Send to Backend
      </button>
    </div>
  );
};

export default SendToBackend;
