import { useEffect, useState } from "react";
import "./App.css";

// components
import PreviousSentences from './components/PreviousSentences';
import { Col, Container, Row } from "react-bootstrap";

const baseURL = process.env.NODE_ENV==='production' ? "/api/v1/" : 'http://localhost:5000/api/v1';

function App() {
  const [sentences, setSentences] = useState([]);
  
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
  }, []);

  return (
        <Container>
        <Row>
          <Col>
            <PreviousSentences sentences={sentences} />
          </Col>
        </Row>
      </Container>  
  );
}

export default App;
