
export function tempoParaSegundos(tempo: string): number {
    const [hora = "0", minuto = "0", segundo = "0"] = tempo.split(":");

    const horaParasegundos = Number(hora) * 3600;
    const minutoParasegundo = Number(minuto) * 60;

    return horaParasegundos + minutoParasegundo + Number(segundo);
}