import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import PreviousSentences from './components/PreviousSentences';
import WordTypeSelect from "./components/WordTypeSelect";
import WordButton from "./components/WordButton";
import SentenceForm from "./components/SentenceForm";
import SentenceDisplay from "./components/SentenceDisplay";

const baseURL = process.env.NODE_ENV === 'production' ? "/api/v1/" : 'http://localhost:5000/api/v1';

function App() {
  const [sentences, setSentences] = useState([]);
  const [sentence, setSentence] = useState('');
  const [wordTypes, setWordTypes] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  
  const showErrorToastMessage = () => {
    toast.error('Sentence is empty!', {
        position: toast.POSITION.TOP_RIGHT
    });
  };
    
  const showSuccesToastMessage = () => {
    toast.success('Sentence submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT
    });
  };
    
  // Fetch the word types from the backend when the component mounts
  const fetchWordTypes = async () => {
    try {
      const response = await fetch(`${baseURL}/words`);
      const data = await response.json();
      setWordTypes(data);
    } catch (err) {
      console.error('Error retrieving word types', err);
    }
  };
  
  // Fetch the previously submitted sentences from the backend when the component mounts
  const fetchSentences = async () => {
    try {
      const response = await fetch(`${baseURL}/sentences`);
      const data = await response.json();
      setSentences(data);
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
      setSelectedWords([...selectedWords, selectedWordType]);
    }
  const handleWordSelect = (word) => {
    // Append the selected word to the sentences
    setSentence((prevSentence) => prevSentence + ' ' + word);
  };

  const handleSubmit = async () => {
    if (!sentence) {
      console.error('Error: Sentence is empty');
      showErrorToastMessage()
      return; // Stop the execution of the function
    }
    
    try {
      // Submit the sentences to the backend
      const body = {sentence};
      const response = await fetch(`${baseURL}/sentences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      setSentences('');
      setSelectedWords([]);
      showSuccesToastMessage();
      window.location = '/';
    } catch (err) {
      console.error('Error submitting sentences', err);
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Sentence App</h1>
      <Row className="text-center mt-5">
        <Col>
          <WordTypeSelect wordTypes={wordTypes} onWordTypeChange={handleWordTypeChange} />
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          {/* Render the selected words */}
          {selectedWords.map((word) => (
            <WordButton key={word} word={word} onWordSelect={handleWordSelect} />
          ))}
        </Col>
      </Row>
      <Row className="text-center mb-5">
        <Col>
          <SentenceDisplay sentences={sentences} />
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <SentenceForm onSubmit={handleSubmit} sentence={sentence} />
          <ToastContainer/>
        </Col>
      </Row>
      <Row>
        <Col  className="text-center mt-5">
          <PreviousSentences sentences={sentences} />
        </Col>
      </Row>  
    </Container>
  );
}

export default App;
