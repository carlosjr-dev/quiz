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
  const [endGame, setEndGame] = useState<boolean>(true);
  const totalQuestions = questions.length;

  const filteredQuest = questions.find((item) => item.id === idQuestion);

  const handlePercent = () => {
    const percentIncrease = 100 / totalQuestions;
    setPercent((prevPercent) => prevPercent + percentIncrease);
  };

  const handleClickBtnLeave = () => {
    handlePercent();
    setQuestNumber(questNumber + 1);
    setIdQuestion(idQuestion + 1);
    verifyEndgame();
  };
  const verifyEndgame = () => {
    if (questNumber === 14) {
      console.log("foi");
      setEndGame(false);
    } else {
      console.log("nao");
    }
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
      verifyEndgame();
    } else if (selectedOption === null) {
      alert("selecione alguma coisa");
      setQuestNumber(questNumber);
      verifyEndgame();
    } else {
      handlePercent();
      setFalseQuest(falseQuest + 1);

      setIdQuestion(idQuestion + 1);
      setQuestNumber(questNumber + 1);
      setNumber(number + 1);
      setCounterQuest(counterQuest + 1);
      verifyEndgame();
    }

    //

    setSelectedOption(null);
  };

  const [percent, setPercent] = useState<number>(0);

  return (
    <>
      {endGame ? (
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

                  <p className="title--quest">{filteredQuest.question}</p>
                  {filteredQuest.options.map(
                    (option: string, index: number) => (
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
                    )
                  )}
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
      ) : (
        <div className="end-stage">
          <div className="end-green">
            <p className="text-game">
              Agradecemos por participar do quiz de O Senhor dos Anéis.
            </p>
            <p className="truequest">{trueQuest}</p>
            <p className="text-true">Acertos</p>
          </div>
          <div className="end-red">
            <p className="text-error">Erros</p>
            <p className="falsequest">{falseQuest}</p>

            <p className="text-game">
              Parabéns pelo seu conhecimento e obrigado por se juntar a nós!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
