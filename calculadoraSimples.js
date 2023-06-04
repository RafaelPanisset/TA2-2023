class CalculadoraSimples {
  
    constructor(sequencia) {
      this.sequencia = sequencia;
      this.numeros = this.processarSequencia();
    }
  
    processarSequencia() {
      return this.sequencia.split(',').map(Number);
    }
  
    calcularValorMinimo() {
      let minValor = this.numeros[0];
      for (let i = 1; i < this.numeros.length; i++)
          minValor = Math.min(minValor, this.numeros[i]);
      return minValor;
    }
  
    calcularValorMaximo() {
      let minValor = this.numeros[0];
      for (let i = 1; i < this.numeros.length; i++)
          minValor = Math.max(minValor, this.numeros[i]);
      return minValor;
    }
  
    calcularNumeroElementos() {
      return this.numeros.length;
    }
  
    calcularValorMedio() {
      let soma = 0;
      for (let i = 1; i < this.numeros.length; i++)
        soma += this.numeros[i];
      return soma / this.calcularNumeroElementos();
    }
  }

  module.exports = CalculadoraSimples;
