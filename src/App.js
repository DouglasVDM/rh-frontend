import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

// components
import PreviousSentences from "./components/PreviousSentences";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/"
    : "http://localhost:5000/api/v1";

// const baseURL = "https://rh-backend.onrender.com/api/v1";

function App() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  const [sentence, setSentence] = useState("");
  const [sentences, setSentences] = useState([]);
  const [types, setTypes] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch the word types from the backend when the component mounts
  const fetchWordTypes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/words/wordtypes`);
      const data = await response.json();
      setTypes(data);
      setLoading(false);
      console.log("wordtypes", data);
    } catch (err) {
      setLoading(false);
      console.error("Error retrieving word types", err);
    }
  };

  useEffect(() => {
    fetchWordTypes();
  }, []);

  const wordsByType = async () => {
    try {
      const response = await fetch(`${baseURL}/words/${selectedType}`);
      const data = await response.json();
      setWords(data);
      console.log(`${selectedType}:`, data);
    } catch (err) {
      console.error("Error retrieving words by type", err);
    }
  };

  useEffect(() => {
    wordsByType();
  }, []);

  // Fetch the previously submitted sentences from the backend when the component mounts
  const fetchSentences = async () => {
    try {
      const response = await fetch(`${baseURL}/sentences`);
      const data = await response.json();
      setSentences(data);
    } catch (err) {
      console.error("Error retrieving sentences", err);
    }
  };

  useEffect(() => {
    fetchSentences();
  }, []);

  const handleTypeChange = async (event) => {
    setSelectedType(event.target.value);
    setSelectedWord("");
  };

  const handleWordChange = (event) => {
    setSelectedWord(event.target.value);
  };

  const handleAddWord = () => {
    if (selectedWord) {
      setSentence((prevSentence) => prevSentence + " " + selectedWord);
      setSelectedWord("");
    }
  };

  const handleSubmit = async () => {
    if (!sentence) {
      console.error("Error: Sentence is empty");
      alert("Error: Sentence is empty");
      return; // Stop the execution of the function
    }

    try {
      const response = await fetch(`${baseURL}/sentences`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence }),
      });
      const data = await response.json();
      setSentence("");
      alert(`submitted sentence:, ${data.sentence}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="text-center">
      <Form.Group className="text-center m-5">
        <Form.Label className="text-center">
          <h1 className="mt-3">Build a Sentence Web App</h1>
        </Form.Label>
    </Form.Group>
    {loading ? <>Loading...from free hosting service, servers may take a few seconds to start</> : <Form.Group className="text-center m-5">
        <Form.Label className="text-center">Choose a word type</Form.Label>
        <Form.Control
          as="select"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="">Select word type</option>
          {types.map((word, index) => (
            <option key={index} value={word.wordtype}>
              {word.wordtype}
            </option>
          ))}
        </Form.Control>
      </Form.Group>}

      {selectedType && (
        <div className="text-center m-5">
          <Form.Group>
            <Form.Label>Choose a word</Form.Label>
            <Form.Control
              as="select"
              value={selectedWord}
              onChange={handleWordChange}
            >
              <option value="">Select word</option>
              {words.map((word) => (
                <option key={word.id} value={word.word}>
                  {word.word}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button
            className="text-center mt-2"
            variant="primary"
            onClick={handleAddWord}
          >
            Add Word
          </Button>
        </div>
      )}

      <div>
        <h1 className="text-center mt-3">Your sentence:</h1>
        <p className="text-center">{sentence}</p>
        <Button
          className="text-center"
          variant="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <ToastContainer />
      </div>
      <div>
        <PreviousSentences sentences={sentences} />
      </div>
    </Form>
  );
}

export default App;
