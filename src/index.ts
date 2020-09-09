import {
  trimUserInput,
  checkForExceptions,
  capitalizeFirstLetter,
} from './utils/functions';

const toWritten = (value: string): string => {
  // Gets monetary value as input and returns its written form

  let result: string;
  let unity: string;
  let decimal: string;

  [unity, decimal] = trimUserInput(value);
  result = checkForExceptions(unity, decimal);

  return capitalizeFirstLetter(result);
};

export default toWritten;
