import toWritten from '../src/index';

describe('Testing unity values (from 0 to 90s)', () => {
  test('R$ 0,00 should return: Valor nulo', () => {
    const result = toWritten('R$ 0,00');
    expect(result).toBe('Valor nulo');
  });

  test('R$ 0,01 should return: Um centavo', () => {
    const result = toWritten('R$ 0,01');
    expect(result).toBe('Um centavo');
  });

  test('R$ 0,67 should return: Sessenta e sete centavos', () => {
    const result = toWritten('R$ 0,67');
    expect(result).toBe('Sessenta e sete centavos');
  });

  test('R$ 1,00 should return: Um real', () => {
    const result = toWritten('R$ 1,00');
    expect(result).toBe('Um real');
  });

  test('R$ 1,87 should return: Um real e oitenta e sete centavos', () => {
    const result = toWritten('R$ 1,87');
    expect(result).toBe('Um real e oitenta e sete centavos');
  });

  test('R$ 10,00 should return: Dez reais', () => {
    const result = toWritten('R$ 10,00');
    expect(result).toBe('Dez reais');
  });

  test('R$ 25,32 should return: Vinte e cinco reais e trinta e dois centavos', () => {
    const result = toWritten('R$ 25,32');
    expect(result).toBe('Vinte e cinco reais e trinta e dois centavos');
  });

  test('R$ 81,00 should return: Oitenta e um reais', () => {
    const result = toWritten('R$ 81,00');
    expect(result).toBe('Oitenta e um reais');
  });

  test('R$ 90,00 should return: Noventa reais', () => {
    const result = toWritten('R$ 90,00');
    expect(result).toBe('Noventa reais');
  });
});

describe('Testing hundreds values (from 100s to 1000s)', () => {
  test('R$ 100,00 should return: Cem reais', () => {
    const result = toWritten('R$ 100,00');
    expect(result).toBe('Cem reais');
  });

  test('R$ 209,07 should return: Duzentos e nove reais e sete centavos', () => {
    const result = toWritten('R$ 209,07');
    expect(result).toBe('Duzentos e nove reais e sete centavos');
  });

  test('R$ 1.200,00 should return: Mil e duzentos reais', () => {
    const result = toWritten('R$ 1.200,00');
    expect(result).toBe('Mil e duzentos reais');
  });

  test('R$ 1.789,42 should return: Mil e setecentos reais e quarenta e dois centavos', () => {
    const result = toWritten('R$ 1.789,42');
    expect(result).toBe('Mil e setecentos e oitenta e nove reais e quarenta e dois centavos');
  });

  test('R$ 9.000,01 should return: Nove mil reais e um centavo', () => {
    const result = toWritten('R$ 9.000,01');
    expect(result).toBe('Nove mil reais e um centavo');
  });

  test('R$ 10.000,00 should return: Dez mil reais', () => {
    const result = toWritten('R$ 10.000,00');
    expect(result).toBe('Dez mil reais');
  });
});

describe('Testing hundreds values without the "." notation', () => {
  test('R$ 5000,00 should return: Cinco mil reais', () => {
    const result = toWritten('R$ 5000,00');
    expect(result).toBe('Cinco mil reais');
  });

  test('R$ 3200,50 should return: Três mil e duzentos reais e cinquenta centavos', () => {
    const result = toWritten('R$ 3200,50');
    expect(result).toBe('Três mil e duzentos reais e cinquenta centavos');
  });

  test('R$ 97.500,00 should return: Noventa e sete mil e quinhentos reais', () => {
    const result = toWritten('R$ 97.500,00');
    expect(result).toBe('Noventa e sete mil e quinhentos reais');
  });
});
