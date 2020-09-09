import { matrix, uniqueCases } from './variables';

function convert(number: string): string {
  /*
    This is where the algorithm is applied:
    Based on matrix and uniqueCases,
    returns the written number
  */

  const value = Number(number);
  let converted = '';
  let ones, tens, hundreds, thousands, tensThousand;

  switch (true) {
    // Thousands
    case (value > 9999):
      tensThousand = Number(number[0]);
      thousands = getThousands(Number(number[1]));
      hundreds = Number(number[2]);
      tens = Number(number[3]);
      ones = Number(number[4]);

      converted = `${matrix.tens[tensThousand]} e ${thousands} e ${matrix.hundreds[hundreds]} e ${matrix.tens[tens]} e ${matrix.units[ones]}`;
      break;

    case (value > 999):
      thousands = getThousands(Number(number[0]));
      hundreds = Number(number[1]);
      tens = Number(number[2]);
      ones = Number(number[3]);

      converted = `${thousands} e ${matrix.hundreds[hundreds]} e ${matrix.tens[tens]} e ${matrix.units[ones]}`;
      break;

    // Hundreds
    case (value > 99):
      hundreds = Number(number[0]);
      tens = Number(number[1]);
      ones = Number(number[2]);

      converted = `${matrix.hundreds[hundreds]} e ${matrix.tens[tens]} e ${matrix.units[ones]}`;
      break;

    // Tens
    case (value > 19):
      tens = Number(number[0]);
      ones = Number(number[1]);

      converted = `${matrix.tens[tens]} e ${matrix.units[ones]}`;
      break;

    // Unique Cases (10 - 19)
    case (value >= 10 && value <= 19):
      converted = uniqueCases[Number(number[1])].toString();
      break;

    // Units
    case (value <= 9):
      converted = matrix.units[Number(number)].toString();
      break;
  }

  return converted;
}

function checkForExceptions(unity: string, decimal: string): string {
  // Decision structure that handles which cases must be taken care of

  let result: string;
  // convert is the function that applies the conversion algorithm
  result = formatCurrencyWrittenForm(convert(unity), 'real');

  // if R$ 0,00
  if (Number(unity) === 0 && Number(decimal) === 0) {
    return 'valor nulo';
  }

  // if R$ 100,00
  if (Number(unity) === 100 && Number(decimal) === 0) {
    return 'Cem reais';
  }

  if (Number(decimal) !== 0) {
    // If any, convert decimal value
    result += formatCurrencyWrittenForm(convert(decimal), 'centavos');
  }

  if (Number(unity) === 0) {
    // if only cents
    result = formatCurrencyWrittenForm(convert(decimal), 'centavosOnly');
  }

  return result;
}

function getThousands(number: number): string {
  // Determines if output should be 'mil' OR <number> mil
  return number === 1 ? 'mil' : `${matrix.units[number]} mil`;
}

function capitalizeFirstLetter(str: string): string {
  // Returns same string with first character capitalized
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function cleanResult(str: string): string {
  // Strips unnecessary text from output
  return str.replace(/( e zero)*( e 0)*/ig, '');
}

function trimUserInput(str: string): Array<string> {
  // Strips money currency or any extra space from input string
  let [unity, decimal] = str.trim().split(',');
  unity = unity.replace(/[^0-9]/gi, '');
  return [unity, decimal];
}

function formatCurrencyWrittenForm(value: string, type: string): string {
  // Returns written currency in the singular or plural form
  let formattedString = '';

  switch (type) {
    case 'real':
      formattedString = (value) === 'um' ? `${value} real` : `${value} reais`;
      break;

    case 'centavosOnly':
      formattedString = value === 'um' ? `${value} centavo` : `${value} centavos`;
      break;

    case 'centavos':
      formattedString = value === 'um' ? ` e ${value} centavo` : ` e ${value} centavos`;
      break;
  }

  return cleanResult(formattedString);
}

export {
  getThousands,
  formatCurrencyWrittenForm,
  capitalizeFirstLetter,
  cleanResult,
  uniqueCases,
  matrix,
  convert,
  checkForExceptions,
  trimUserInput,
};
