import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// components
import PreviousSentences from './components/PreviousSentences';
import WordTypeSelect from "./components/WordTypeSelect";
import WordButton from "./components/WordButton";
import SentenceForm from "./components/SentenceForm";
import SentenceDisplay from "./components/SentenceDisplay";

const baseURL = process.env.NODE_ENV === 'production' ? "/api/v1/" : 'http://localhost:5000/api/v1';

function App() {
  const [sentence, setSentence] = useState([]);
  const [wordTypes, setWordTypes] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);


  
  // Fetch the word types from the backend when the component mounts
  const fetchWordTypes = async () => {
    try {
      const response = await fetch(`${baseURL}/words`);
      const data = await response.json();
      setWordTypes(data);
      console.log('fetchwordtypes', data);
    } catch (err) {
      console.error('Error retrieving word types', err);
    }
  };
  
  // Fetch the previously submitted sentences from the backend when the component mounts
  const fetchSentences = async () => {
    try {
      const response = await fetch(`${baseURL}/sentences`);
      const data = await response.json();
      setSentence(data);
    } catch (err) {
      console.error('Error retrieving sentences', err);
    }
  };

  useEffect(() => {
    fetchSentences();
    fetchWordTypes();
    // handleWordTypeChange();
  }, []);
  
  const handleWordTypeChange = async (event) => {
    const selectedWordType = event.target.value;
    try {
      // Fetch the words of the selected type from the backend
      const response = await fetch(`${baseURL}/words/${selectedWordType}`);
      const data = await response.json();
      setSelectedWords([...selectedWords, ...data]);
      console.log('wordtype', data)
    } catch (err) {
      console.error('Error retrieving words', err);
    }
  };
  
  const handleWordSelect = (word) => {
    // Append the selected word to the sentence
    setSentence((prevSentence) => prevSentence + ' ' + word);
  };

  const handleSubmit = async () => {
    try {
      // Submit the sentence to the backend
      await fetch(`${baseURL}/sentences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence }),
      });
      setSentence('');
      setSelectedWords([]);
      alert('Sentence submitted successfully');
    } catch (err) {
      console.error('Error submitting sentence', err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <WordTypeSelect wordTypes={wordTypes} onWordTypeChange={handleWordTypeChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Render the selected words */}
          {selectedWords.map((word) => (
            <WordButton key={word} word={word} onWordSelect={handleWordSelect} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <SentenceDisplay sentence={sentence} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SentenceForm onSubmit={handleSubmit} />
        </Col>
      </Row>
      <Row>
        <Col>
          <PreviousSentences sentence={sentence} />
        </Col>
      </Row>  
    </Container>
  );
}

export default App;
