import toWritten from '../src/index';

describe('Testing unity values (from 0 to 90s)', () => {
  test('R$ 0,00 should equal to valor nulo', () => {
    const result = toWritten('R$ 0,00');
    expect(result).toBe('valor nulo');
  });

  test('R$ 0,01 should equal to Um centavo', () => {
    const result = toWritten('R$ 0,01');
    expect(result).toBe('Um centavo');
  });

  test('R$ 0,67 should equal to Sessenta e sete centavos', () => {
    const result = toWritten('R$ 0,67');
    expect(result).toBe('Sessenta e sete centavos');
  });

  test('R$ 1,00 should equal to Um real', () => {
    const result = toWritten('R$ 1,00');
    expect(result).toBe('Um real');
  });

  test('R$ 1,87 should equal to Um real e oitenta e sete centavos', () => {
    const result = toWritten('R$ 1,87');
    expect(result).toBe('Um real e oitenta e sete centavos');
  });

  test('R$ 10,00 should equal to Dez reais', () => {
    const result = toWritten('R$ 10,00');
    expect(result).toBe('Dez reais');
  });

  test('R$ 25,32 should equal to Vinte e cinco reais e trinta e dois centavos', () => {
    const result = toWritten('R$ 25,32');
    expect(result).toBe('Vinte e cinco reais e trinta e dois centavos');
  });

  test('R$ 81,00 should equal to Oitenta e um reais', () => {
    const result = toWritten('R$ 81,00');
    expect(result).toBe('Oitenta e um reais');
  });
});

describe('Testing hundreds values (from 100s to 1000s)', () => {
  test('R$ 1.200,00 should equal to Mil e duzentos reais', () => {
    const result = toWritten('R$ 1.200,00');
    expect(result).toBe('Mil e duzentos reais');
  });

  test('R$ 1.789,42 should equal to Mil e setecentos reais e quarenta e dois centavos', () => {
    const result = toWritten('R$ 1.789,42');
    expect(result).toBe('Mil e setecentos e oitenta e nove reais e quarenta e dois centavos');
  });

  test('R$ 9.000,01 should equal to Nove mil reais e um centavo', () => {
    const result = toWritten('R$ 9.000,01');
    expect(result).toBe('Nove mil reais e um centavo');
  });
});

describe('Testing hundreds values without the "." notation', () => {
  test('R$ 5000,00 should equal to Cinco mil reais', () => {
    const result = toWritten('R$ 5000,00');
    expect(result).toBe('Cinco mil reais');
  });

  test('R$ 3200,50 should equal to Três mil e duzentos reais e cinquenta centavos', () => {
    const result = toWritten('R$ 3200,50');
    expect(result).toBe('Três mil e duzentos reais e cinquenta centavos');
  });
});
