class Corredor {
  static determinarEstadoDasLampadas(numeroLampadas: number): string[] {
    const estadoLampadas: boolean[] = Array(numeroLampadas).fill(false);

    for (let i = 1; i <= numeroLampadas; i++) {
      for (let j = i - 1; j < numeroLampadas; j += i) {
        estadoLampadas[j] = !estadoLampadas[j];
      }
    }

    return estadoLampadas.map((estado) => (estado ? "on" : "off"));
  }
}

// Exemplo de uso:
const numeroLampadas = 3;
const estadoFinalLampadas = Corredor.determinarEstadoDasLampadas(numeroLampadas);
console.log(estadoFinalLampadas);
