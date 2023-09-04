import { useState } from "react";
import questions from "../hooks/questions";
import "./ask.css";

import Progressbar from "../progressbar/Progressbar";

export default function Ask() {
  const [counterQuest, setCounterQuest] = useState<number>(0);
  const [idQuestion, setIdQuestion] = useState<number>(1);
  const [number, setNumber] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questNumber, setQuestNumber] = useState<number>(1);
  const [trueQuest, setTrueQuest] = useState<number>(0);
  const [falseQuest, setFalseQuest] = useState<number>(0);

  const totalQuestions = questions.length;

  const filteredQuest = questions.find((item) => item.id === idQuestion);

  const handlePercent = () => {
    const percentIncrease = 100 / totalQuestions;
    setPercent((prevPercent) => prevPercent + percentIncrease);
  };

  const handleClickBtnLeave = () => {
    setQuestNumber(questNumber + 1);
    setIdQuestion(idQuestion + 1);
  };
  const handleClickBtn = () => {
    const trueId = filteredQuest?.correctAnswer;
    if (trueId === selectedOption) {
      handlePercent();
      setTrueQuest(trueQuest + 1);
      setIdQuestion(idQuestion + 1);
      setQuestNumber(questNumber + 1);
      setNumber(number + 1);
      setCounterQuest(counterQuest + 1);
    } else if (selectedOption === null) {
      alert("selecione alguma coisa");
      setQuestNumber(questNumber);
      setNumber(number + 1);
      setCounterQuest(counterQuest + 1);
    } else {
      handlePercent();
      setFalseQuest(falseQuest + 1);
      console.log(selectedOption);
      setQuestNumber(questNumber + 1);
      setNumber(number + 1);
      setCounterQuest(counterQuest + 1);
    }

    //

    setSelectedOption(null);
  };

  const [percent, setPercent] = useState<number>(0);

  return (
    <>
      <div className="content-quiz">
        <Progressbar percent={percent}></Progressbar>
        {filteredQuest && (
          <div className="radio-section">
            <ul>
              <li>
                <div className="container-header">
                  <p className="heade-text">
                    <span className="container-title">
                      Questão {questNumber} de {totalQuestions} LOTR Quiz
                    </span>
                    <span className="container-timer"></span>
                  </p>
                </div>
                <span className="container-questnumber">
                  Questão {questNumber}
                </span>

                <h1>{filteredQuest.question}</h1>
                {filteredQuest.options.map((option: string, index: number) => (
                  <nav key={index}>
                    <input
                      type="radio"
                      id={`option${index}`}
                      name={`opcao${filteredQuest.id}`}
                      checked={selectedOption === index}
                      onChange={() => setSelectedOption(index)}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                  </nav>
                ))}
                <div className="content-btn">
                  <button className="btn-quit" onClick={handleClickBtnLeave}>
                    Desistir
                  </button>
                  <button className="btn-confirm" onClick={handleClickBtn}>
                    Confirmar
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
