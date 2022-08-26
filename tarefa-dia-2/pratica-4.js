
const numero = 1500450271 
let i = 2
let ehPrimo = true

while (i <= n) {
    if (numero % i == 0) {
        ehPrimo = false
        break 
    }
    i++
}

if (ehPrimo) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)

i = 2 
while (numero % i != 0)
    i++ 

if (numero == i) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)
