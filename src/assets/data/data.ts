import { GROUP_ENUM } from "../../constants/appConstants";

export type Word = {
  id: number;
  value: string;
  meaning: string;
  wasCorrect?: boolean;
  categories: GROUP_ENUM[];
};

export const wordList: Word[] = [
  {
    id: 1,
    value: "Gap",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_A],
  },
  {
    id: 2,
    value: "Can",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_A],
  },
  {
    id: 3,
    value: "Dad",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_A],
  },
  {
    id: 4,
    value: "Fan",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_A],
  },
  {
    id: 5,
    value: "Cab",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_A],
  },
  {
    id: 6,
    value: "Peg",
    meaning: "A fruit",
    categories: [GROUP_ENUM.SHORT_VOWEL_E],
  },
];
