interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  id: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o nome do protagonista da trilogia 'O Senhor dos Anéis'?",
    options: ["Frodo Bolseiro", "Aragorn", "Gandalf", "Legolas"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Quem é o autor de 'O Senhor dos Anéis'?",
    options: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "C.S. Lewis",
      "J.K. Rowling",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question:
      "Qual é o nome da terra fictícia onde 'O Senhor dos Anéis' se passa?",
    options: ["Nárnia", "Terra-média", "Westeros", "Hogwarts"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question:
      "Qual objeto corrompido pelo poder do mal é central na trama de 'O Senhor dos Anéis'?",
    options: [
      "A Espada Flamejante",
      "O Anel Único",
      "A Varinha das Varinhas",
      "O Cálice de Fogo",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "Qual é o nome da criatura que guia Frodo e Sam na jornada até Mordor?",
    options: ["Gollum", "Smeagol", "Balrog", "Sauron"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Quantos membros a Sociedade do Anel inicialmente possui?",
    options: ["10", "9", "8", "7"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      "Qual é o nome do elfo arqueiro que faz parte da Sociedade do Anel?",
    options: ["Legolas", "Thranduil", "Galadriel", "Elrond"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question:
      "Qual é o nome da espada quebrada que é reforjada para enfrentar as forças do mal?",
    options: ["Glamdring", "Orcrist", "Andúril", "Sting"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Qual é o título completo do primeiro livro da trilogia?",
    options: [
      "A Sociedade do Anel",
      "As Duas Torres",
      "O Retorno do Rei",
      "A Irmandade do Anel",
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question:
      "Qual é a terra governada por Sauron e onde está localizado o olho flamejante?",
    options: ["Mordor", "Isengard", "Rohan", "Gondor"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question:
      "Qual é o nome do mago que lidera os Istari, também conhecido como Mago Cinzento?",
    options: ["Radagast", "Saruman", "Gandalf", "Melkor"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question:
      "Qual é a criatura alada e das sombras que enfrenta Gandalf no topo de Moria?",
    options: ["Balrog", "Nazgûl", "Dragão Smaug", "Ent"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question:
      "Qual é o nome do reino dos elfos, governado por Elrond, que abriga o Conselho de Elrond?",
    options: ["Lothlórien", "Valfenda", "Rivendell", "Mirkwood"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question:
      "Qual é o nome do cavalo leal de Aragorn que acompanha os personagens durante a jornada?",
    options: ["Pégaso", "Brego", "Hasufel", "Shadowfax"],
    correctAnswer: 3,
  },
];

export default questions;
