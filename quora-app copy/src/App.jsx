import React, { useState } from "react";
import Question from "./Question";
import "./App.css";
import Answer from "./Answer";

function App() {
  const [questions, setQuestions] = useState([
    {
      nick: "Eva",
      text: "How can I optimize my website for better performance?",
      answers: [],
    },
    {
      nick: "Petra",
      text: "What are the key features of the latest JavaScript ECMAScript version?",
      answers: [],
    },
    {nick: "Martin", text: "Any recommendations for a reliable hosting provider?", answers: []}, 
    {nick: "Pavel", text: "Is it worth learning TypeScript for web development?", answers: []},
    {nick: "Karolina", text: "Tips for securing a Node.js application?", answers: []},
    {nick: "Michal", text: "How to implement responsive design in CSS effectively?", answers: []},
    {nick: "Veronika", text: "Best practices for handling state in React applications?", answers: []},
    {nick: "Tomáš", text: "What tools do you recommend for version control in a team project?", answers: []},
    {nick: "Lucie", text: "How to integrate third-party APIs in a Python Flask app?", answers: []},
    {nick: "Adam", text: "Opinions on using NoSQL databases vs. traditional relational databases?", answers: []},
    {nick: "Zuzana", text: "Are there any upcoming trends in front-end development to watch out for?", answers: []},
    {nick: "Jiří", text: "What are the advantages of using a CSS preprocessor like Sass or Less?", answers: []},
  ]);

  const handleAnswerSubmit = (questionIndex, newAnswer) => {
    const newQuestions = [...questions];
    const currentAnswers = newQuestions[questionIndex]?.answers || [];
    currentAnswers.push(newAnswer);

    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      answers: currentAnswers,
    };

    setQuestions(newQuestions);
  };

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <Question
            key={index}
            questionIndex={index}
            nick={question.nick}
            text={question.text}
            answers={question.answers}
            onAnswerSubmit={handleAnswerSubmit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
