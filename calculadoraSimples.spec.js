
const calculadoraSimples = require('./calculadoraSimples');

describe('Processar os dados: ', () => {
    it('deve retornar uma array', () => {
        const sequenciaNumeros = "6, 9, 15, -2, 92, 11";
        let estatisticas = new calculadoraSimples(sequenciaNumeros);
        expect(Array.isArray(estatisticas.processarSequencia())).toBe(true);

    });
});

describe('Calcular todos os dados: ', () => {
    it('deve calcular o valor mínimo corretamente', () => {
        const sequenciaNumeros = "6, 9, 15, -2, 92, 11";
        let estatisticas = new calculadoraSimples(sequenciaNumeros);
        expect(estatisticas.calcularValorMinimo()).toEqual(-2);
    });

    it('deve calcular o valor máximo corretamente', () => {
        const sequenciaNumeros = "6, 9, 15, -2, 92, 11";
        let estatisticas = new calculadoraSimples(sequenciaNumeros);
        expect(estatisticas.calcularValorMaximo()).toEqual(92);
    });

    it('deve calcular o valor tamanho corretamente', () => {
        const sequenciaNumeros = "6, 9, 15, -2, 92, 11";
        let estatisticas = new calculadoraSimples(sequenciaNumeros);
        expect(estatisticas.calcularNumeroElementos()).toEqual(6);
    });

    it('deve calcular o número de elementos na sequência corretamente', () => {
        const sequenciaNumeros = "6, 9, 15, -2, 92, 11";
        let estatisticas = new calculadoraSimples(sequenciaNumeros);
        expect(estatisticas.calcularNumeroElementos()).toEqual(6);
    });
});
  

 

  

  

