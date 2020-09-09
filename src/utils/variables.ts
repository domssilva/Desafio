import { MatrixInterface } from './interfaces';

const uniqueCases: Array<string> = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const matrix: MatrixInterface = {
  units: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'], // 0-9
  tens: [0, 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'], // 10-90
  hundreds: [0, 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'], // 100-900
};

export {
  uniqueCases,
  matrix,
};
