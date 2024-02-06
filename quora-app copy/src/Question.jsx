import React, { useState } from "react";
import Answer from "./Answer";

export const Question = (props) => {
  const [newAnswer, setNewAnswer] = useState({
    nick: "",
    text: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnswer({
      ...newAnswer,
      [name]: value,
    });
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    props.onAnswerSubmit(props.questionIndex, newAnswer);
    setNewAnswer({ nick: "", text: "" });
  };

  return (
    <li>
      <h3>{props.nick}</h3>
      <p>{props.text}</p>
      <div className="answer-card">
        <h4>Answers:</h4>
        {Array.isArray(props.answers) &&
          props.answers.map((answer, index) => (
            <Answer key={index} nick={answer.nick} text={answer.text} />
          ))}
      </div>
      <h4>Add an Answer:</h4>
      <form onSubmit={handleAnswerSubmit}>
        <label>
          Nick:
          <input
            type="text"
            name="nick"
            value={newAnswer.nick}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Answer:
          <textarea
            name="text"
            value={newAnswer.text}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit Answer</button>
      </form>
    </li>
  );
};

export default Question;
