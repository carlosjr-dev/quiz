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
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [level, setLevel] = useState<boolean>(false);
  const totalQuestions = questions.length;
  const [name, setName] = useState<string>("unknow");
  const filteredQuest = questions.find((item) => item.id === idQuestion);

  const nameEnd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePercent = () => {
    const percentIncrease = 100 / totalQuestions;
    setPercent((prevPercent) => prevPercent + percentIncrease);
  };

  const handleGame = () => {
    if (number == 13) {
      setGameOver(false);
    }
  };
  const handleClickBtn = () => {
    const trueId = filteredQuest?.correctAnswer;

    if (trueId === selectedOption) {
      handlePercent();
      setTrueQuest(trueQuest + 1);
    } else {
      handlePercent();
      setFalseQuest(falseQuest + 1);
    }

    setIdQuestion(idQuestion + 1);
    setNumber(number + 1);
    handleGame();
    setQuestNumber(questNumber + 1);
    setCounterQuest(counterQuest + 1);
    setSelectedOption(null);
  };

  const [percent, setPercent] = useState<number>(0);

  return (
    <>
      {gameOver ? (
        <div className="content-quiz">
          <Progressbar percent={percent}></Progressbar>
          {filteredQuest && (
            <div className="radio-section">
              <ul>
                <li>
                  <div className="container-header">
                    <h2>
                      <span className="container-title">
                        Questão {questNumber} de {totalQuestions} LOTR Quiz
                      </span>
                      <span className="container-timer"></span>
                    </h2>
                  </div>
                  <span className="container-questnumber">
                    Questão {questNumber}
                  </span>

                  <h1>{filteredQuest.question}</h1>
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
                    <button className="btn-quit" onClick={handleClickBtn}>
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
        <div>
          <input
            type="text"
            name="yourName"
            id="1"
            placeholder="Digite seu nome"
            onChange={nameEnd}
          />
          <button onClick={() => setLevel(true)}>Enviar</button>
        </div>
      )}
      {level ? (
        <div className="">
          Parabéns{name}, viajante destemido da Terra-média! Você completou o
          quiz do Senhor dos Anéis com sucesso, respondendo a {trueQuest}{" "}
          questões corretamente e demonstrando um conhecimento profundo sobre
          esse mundo épico criado por J.R.R. Tolkien. Sua jornada por terras
          vastas, repletas de heróis corajosos, criaturas mágicas e um conflito
          de proporções épicas, é verdadeiramente impressionante. Assim como os
          membros da Sociedade do Anel, você provou ser destemido diante dos
          desafios e sábio na busca pelo conhecimento. Mesmo diante das
          adversidades representadas por {falseQuest} perguntas incorretas, você
          se destacou pela sua dedicação em explorar os meandros das tramas,
          culturas e personagens da Terra-média. Que sua paixão pela sabedoria e
          aventura continue a guiar seus passos, assim como o farol de Minas
          Tirith guiava os viajantes noturnos. Seu comprometimento em desbravar
          os contos e lições do Senhor dos Anéis é digno de aplausos. Lembre-se
          sempre de que, assim como o Um Anel, o conhecimento também tem o poder
          de moldar destinos. À medida que você continua sua jornada, que a
          amizade de seus aliados e a coragem dos heróis lendários o inspirem a
          alcançar novos horizontes. Seja revisitando os livros e filmes ou
          mergulhando em outros aspectos do legado de Tolkien, que sua
          determinação nunca vacile. Obrigado por embarcar nesta jornada de
          conhecimento e paixão pela Terra-média, {name}! Que seus dias sejam
          iluminados pelas estrelas de Varda e que você sempre encontre alegria
          na busca por respostas e aventuras. "Nem tudo que é ouro reluz, nem
          todos os que erram estão perdidos." - J.R.R. Tolkien
        </div>
      ) : (
        console.log(" nao   foi")
      )}
    </>
  );
}
