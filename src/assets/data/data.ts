export type Word = {
  id: number;
  value: string;
  meaning: string;
  wasCorrect?: boolean;
};

export const wordList: Word[] = [
  {
    id: 1,
    value: "Gap",
    meaning: "A fruit",
  },
  {
    id: 2,
    value: "Can",
    meaning: "A fruit",
  },
  {
    id: 3,
    value: "Dad",
    meaning: "A fruit",
  },
  {
    id: 4,
    value: "Fan",
    meaning: "A fruit",
  },
  {
    id: 5,
    value: "Cab",
    meaning: "A fruit",
  },
];
