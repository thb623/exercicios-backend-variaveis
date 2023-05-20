const m = 90000
const c = 60000
const n = 24

const i = (m / c) ** (1 / n) - 1


console.log(`O seu financiamento de ${m} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${c} reais.`)