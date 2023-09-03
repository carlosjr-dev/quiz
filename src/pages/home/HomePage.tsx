import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomePage() {
  const [userName, setUserName] = useState<string>("unknow");
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      Bem-vindo ao Quiz do Senhor dos Anéis! "O Senhor dos Anéis", a icônica
      obra literária de J.R.R. Tolkien, cativou milhões de fãs em todo o mundo
      com seu rico mundo de fantasia, personagens memoráveis e épica batalha
      entre o bem e o mal. Agora é a sua chance de testar seus conhecimentos
      sobre esse universo incrível! Prepare-se para embarcar em uma jornada por
      terras mágicas, povoadas por hobbits corajosos, elfos graciosos, anões
      destemidos, magos poderosos e uma infinidade de criaturas incríveis. Desde
      os recantos tranquilos do Condado até as sombras escuras de Mordor, este
      quiz irá desafiar sua memória e sua paixão pelo mundo de Tolkien. Esteja
      você familiarizado com os livros originais, as adaptações cinematográficas
      ou ambos, há algo aqui para todos os fãs. Desde perguntas fáceis até
      desafios dignos de um mestre anelar, prepare-se para testar seu
      conhecimento sobre a Sociedade do Anel, a busca para destruir o Um Anel e
      muito mais. Instruções: Responda às perguntas com base no seu conhecimento
      do universo de "O Senhor dos Anéis". Escolha a resposta que você acredita
      ser a correta e avance para ver se acertou! Lembre-se, este quiz é apenas
      para diversão e para testar sua paixão por essa obra-prima da literatura
      fantástica. Agora, sem mais delongas, prepare-se para começar sua jornada
      pelo mundo de "O Senhor dos Anéis". Boa sorte e que os ventos de Valinor
      guiem suas respostas!
      <div>
        Digite seu nome para inciar
        <input type="text" placeholder="Digite aqui" onChange={handleName} />
      </div>
      {userName}
    </div>
  );
}

export default HomePage;
