import React, { Fragment } from "react";

const Sentences = ({ sentences }) => {
  return (
    <Fragment>
      <h1 className="text-center mt-5">All Sentences</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">sentence_name</th>
          </tr>
        </thead>
        <tbody>
          {sentences.map((sentence, index) => {
            return (
              <tr key={sentence.sentence_id}>
                <td>{index + 1}</td>
                <td>{sentence.sentence_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Sentences;
