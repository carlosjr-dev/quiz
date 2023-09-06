import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  return (
    <div className="container-homepage">
      <h1> Bem-vindo ao Quiz do Senhor dos Anéis! </h1>
      <p className="containet-text">
        "O Senhor dos Anéis", a obra literária icônica de J.R.R. Tolkien,
        cativou milhões de fãs ao redor do mundo com o seu rico mundo de
        fantasia, personagens memoráveis e a épica batalha entre o bem e o mal.
        Agora é a sua oportunidade de testar os seus conhecimentos sobre esse
        universo incrível! Prepare-se para embarcar em uma jornada por terras
        mágicas, habitadas por hobbits corajosos, elfos graciosos, anões
        destemidos, magos poderosos e uma variedade de criaturas incríveis.
      </p>
      <p className="containet-text">
        Desde os cantos tranquilos do Condado até as sombras escuras de Mordor,
        este quiz irá desafiar a sua memória e a sua paixão pelo mundo de
        Tolkien. Independentemente de estar familiarizado com os livros
        originais, as adaptações cinematográficas ou ambos, há algo aqui para
        todos os fãs. Desde perguntas fáceis até desafios dignos de um mestre do
        anel, prepare-se para testar o seu conhecimento sobre a Sociedade do
        Anel, a jornada para destruir o Um Anel e muito mais.
      </p>
      <p className="containet-text">
        <strong>Instruções:</strong> Responda às perguntas com base no seu
        conhecimento do universo de "O Senhor dos Anéis". Escolha a resposta que
        acredita ser correta e avance para ver se acertou! Lembre-se, este quiz
        é apenas para diversão e para testar a sua paixão por esta obra-prima da
        literatura fantástica. Agora, sem mais demora, prepare-se para iniciar a
        sua jornada pelo mundo de "O Senhor dos Anéis". Boa sorte e que os
        ventos de Valinor guiem as suas respostas!
      </p>
      <div>
        <h2>Boa sorte e que os ventos de Valinor guiem as suas respostas!</h2>
      </div>
      <div className="container--btn">
        <div className="container--ring">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          ></svg>
        </div>
        <div className="btn--green">
          <div className="btn--black">
            <Link className="btn-text" to="/ask">
              Iniciar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
