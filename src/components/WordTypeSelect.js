import React from 'react';
import { Container, Form } from 'react-bootstrap';

const WordTypeSelect = ({ wordTypes, onWordTypeChange }) => {
    return (
        <Container>
            <p>Start by choosing your words</p>
            <Form.Select onChange={onWordTypeChange}>
                <option value="">Select a word by type</option>
                {/* Render the available word types */}
                {wordTypes.map((wordType) => (
                    <option key={wordType.id} value={wordType.word}>
                        {wordType.word_type} : {wordType.word}
                    </option>
                ))}
            </Form.Select>
        </Container>
    );
};

export default WordTypeSelect;
