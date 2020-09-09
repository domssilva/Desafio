const toWritten = (value: string): string => {
  /*
    Gets monetary value as input and returns its written form.
  */

  let [unity, decimal] = value.trim().split(',');
  unity = unity.replace(/[^0-9]/gi, '');

  const uniqueCases = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  const matrix = [
    ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'], // 0-9
    [0, 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'], // 10-90
    [0, 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'], // 100-900
  ];

  // Certify that R$ 1 returns the word 'real'
  let result = convert(unity) === 'um' ? `${convert(unity)} real` : `${convert(unity)} reais`;

  // if there are any decimal numbers, convert them and append to the result string
  if (Number(decimal) !== 0) {
    // console.log('tem decimal!');
    result += convert(decimal) === 'um' ? ` e ${convert(decimal)} centavo` : ` e ${convert(decimal)} centavos`;
  }

  // if only cents
  if (Number(unity) === 0) {
    result = convert(decimal) === 'um' ? `${convert(decimal)} centavo` : `${convert(decimal)} centavos`;
  }

  // if R$ 0,00
  if (Number(unity) === 0 && Number(decimal) === 0) {
    return 'valor nulo';
  }

  function convert(number: string): string {
    /*
      Based on matrix and uniqueCases, returns written number
    */

    const value = Number(number);
    let converted = '';
    let ones, tens, hundreds, thousands;

    switch (true) {
      // Thousands
      case (value > 999):
        // console.log('##| switch ~ milhares |##');

        thousands = getThousands(Number(number[0]));
        hundreds = Number(number[1]);
        tens = Number(number[2]);
        ones = Number(number[3]);

        converted = `${thousands} e ${matrix[2][hundreds]} e ${matrix[1][tens]} e ${matrix[0][ones]}`;
        break;

      // Hundreds
      case (value > 99):
        // console.log('##| switch ~ centenas |##');

        hundreds = Number(number[0]);
        tens = Number(number[1]);
        ones = Number(number[2]);

        converted = `${matrix[2][hundreds]} e ${matrix[1][tens]} e ${matrix[0][ones]}`;
        break;

      // Tens
      case (value > 19):
        // console.log('##| switch ~ dezenas |###');

        tens = Number(number[0]);
        ones = Number(number[1]);

        converted = `${matrix[1][tens]} e ${matrix[0][ones]}`;
        break;

      // Unique Cases (10 - 19)
      case (value >= 10 && value <= 19):
        // console.log('##| switch ~ casos unicos |###');

        converted = uniqueCases[Number(number[1])].toString();
        break;

      // Units
      case (value <= 9):
        // console.log('##| switch ~ unidades |###');

        converted = matrix[0][Number(number)].toString();
        break;
    }

    // console.log(`Convertendo R$ ${number}`);
    converted = cleanResult(converted);
    return converted;
  }

  function getThousands(number: number): string {
    return number === 1 ? 'mil' : `${matrix[0][number]} mil`;
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function cleanResult(str: string): string {
    return str.replace(/( e zero)*( e 0)*/ig, '');
  }

  // console.log(result);
  result = capitalizeFirstLetter(result);
  return result;
};

export default toWritten;
