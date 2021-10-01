const motoBoys = [
  {
    key: 'motoBoyUm',
    taxa: 2,
    exclusividade: ''
  },
  {
    key: 'motoBoyDois',
    taxa: 2,
    exclusividade: ''
  },
  {
    key: 'motoBoyTres',
    taxa: 2,
    exclusividade: ''
  },
  {
    key: 'motoBoyQuatro',
    taxa: 2,
    exclusividade: 'loja1'
  },
  {
    key: 'motoBoyCinco',
    taxa: 3,
    exclusividade: ''
  }
]

const lojas = [
  {
    key: 'loja1',
    pedidos: [50, 50, 50],
    paga: 5
  },
  {
    key: 'loja2',
    pedidos: [50, 50, 50, 50],
    paga: 5
  },
  {
    key: 'loja3',
    pedidos: [50, 50, 100],
    paga: 15
  }
]

let findMotoBoy = ''

const input = document.querySelector('.input_find')
input.addEventListener('change', event => {
  findMotoBoy = String(event.target.value)
})

const div = document.querySelector('.result')
const button = document.querySelector('button')

button.addEventListener('click', event =>
  find()
)

function find() {
  let loja1
  const l = lojas.map(e => {
    const l = e
    if (l.key === 'loja1') {
      loja1 = l
    }
  })

  let findMotoBoyData = ''

  const m = motoBoys.map(e => {
    const m = e
    if (m.key === findMotoBoy) {
      findMotoBoyData = m
    }
  })

  const loja1Name = loja1?.key
  const loja1Pedidos = loja1?.pedidos.reduce((a, b) => a + b)
  const loja1Paga = loja1?.paga

  if (findMotoBoy === '') {

    const buscaMotoboy = Math.floor(Math.random() * motoBoys.length)
    const responstaMotoboy = motoBoys[buscaMotoboy]
    const motoBoy = responstaMotoboy.key
    const motoBoyTaxa = responstaMotoboy.taxa

    if (motoBoy === 'motoBoyQuatro') {
      const totalDaEntrega = (loja1Pedidos * (loja1Paga / 100)) + motoBoyTaxa

      // div.textContent = `${motoBoy}, ${loja1Name}, Total da entréga: ${totalDaEntrega}`

      div.innerHTML = `
        <div>
          <h3>${motoBoy}</h3>
          <h4>Exclusivo: ${loja1Name} - Total: <strong>${loja1?.pedidos.length}</strong> pedidos</h4>
          <p>Total da entrega: <span>${totalDaEntrega}</span></p>
        </div>
      `

    } else {

      const buscaLoja = Math.floor(Math.random() * lojas.length)
      const responstaLoja = lojas[buscaLoja]
      const loja = responstaLoja.key
      const lojaPaga = responstaLoja.paga
      const totalDosPedidos = responstaLoja.pedidos.reduce((a, b) => a + b)

      const totalDaEntrega = (totalDosPedidos * (lojaPaga / 100)) + motoBoyTaxa

      // div.textContent = `${motoBoy}, ${loja}, Total da entréga: ${totalDaEntrega}`

      div.innerHTML = `
        <div>
          <h3>${motoBoy}</h3>
          <h4>${loja} - Total: <strong>${responstaLoja.pedidos.length}</strong> pedidos</h4>
          <p>Total da entrega: <span>${totalDaEntrega}</span></p>
        </div>
      `
    }


  } else {
    const motoBoy = findMotoBoyData.key
    const motoBoyTaxa = findMotoBoyData.taxa

    if (motoBoy === 'motoBoyQuatro') {
      const totalDaEntrega = (loja1Pedidos * (loja1Paga / 100)) + motoBoyTaxa

      div.innerHTML = `
        <div>
          <h3>${motoBoy}</h3>
          <h4>Exclusivo: ${loja1Name} - Total: <strong>${loja1?.pedidos.length}</strong> pedidos</h4>
          <p>Total da entrega: <span>${totalDaEntrega}</span></p>
        </div>
      `

    } else {
      const buscaLoja = Math.floor(Math.random() * lojas.length)
      const responstaLoja = lojas[buscaLoja]
      const loja = responstaLoja.key
      const lojaPaga = responstaLoja.paga
      const totalDosPedidos = responstaLoja.pedidos.reduce((a, b) => a + b)

      const totalDaEntrega = (totalDosPedidos * (lojaPaga / 100)) + motoBoyTaxa

      div.innerHTML = `
        <div>
          <h3>${motoBoy}</h3>
          <h4>${loja} - Total: <strong>${responstaLoja.pedidos.length}</strong> pedidos</h4>
          <p>Total da entrega: <span>${totalDaEntrega}</span></p>
        </div>
      `

    }
  }
}
