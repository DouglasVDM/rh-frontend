import { Fragment, useEffect, useState } from "react";
import "./App.css";

// components
import Nouns from "./components/Nouns";
import Sentences from "./components/Sentences";
import SendToBackend from "./components/SendToBackend";

// const baseURL = process.env.NODE_ENV==='production' ? "/api/v1/" : 'http://localhost:5000/api/v1';
const baseURL = "http://localhost:5000/api/v1";

function App() {
  const [nouns, setNouns] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [selectedNoun, setSelectedNoun] = useState("");

  const handleSelectNoun = (noun) => {
    setSelectedNoun(noun);
    // Use the selected value in this component or pass it to other child components
  };

  const getNouns = async () => {
    try {
      const response = await fetch(`${baseURL}/nouns`);
      const jsonData = await response.json();
      // console.log('jsonData', jsonData)
      setNouns(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getSentences = async () => {
    try {
      const response = await fetch(`${baseURL}/sentences`);
      const jsonData = await response.json();
      setSentences(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNouns();
    getSentences();
  }, [sentences]);

  return (
    <Fragment>
      <div className="container">
        <p className="text-center mt-5">Hello from React</p>

        <Nouns onSelectNoun={handleSelectNoun} nouns={nouns} />
        <p className="text-center mt-5">Your sentence: "{selectedNoun}"</p>

        {selectedNoun && <SendToBackend selectedNoun={selectedNoun} />}

        <Sentences sentences={sentences} setSentences={setSentences} />
      </div>
    </Fragment>
  );
}

export default App;
