let puertas_cuantas = parseInt(prompt("añada en numero de puetas que tienes"))

function puertas() {
    for (let i = 0; i <= puertas_cuantas; i++) {
        if (i > 0) {
            console.log(i)
        }
    }
}

function main() {
    let number1 = 1;
    let number2 = 2;
    let miCoche = {nombre:"ford", puertas:3}
    let suma_coche = miCoche.puertas + number1
    let suma = number1 + number2 + suma_coche
    console.log("tiene " + suma_coche + " puertas")
    console.log("suma main " + suma)
}
class Coche {
    constructors(puertas, ) {
        this._puertas = puertas;
    }
}
puertas()
main()