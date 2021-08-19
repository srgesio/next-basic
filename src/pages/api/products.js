// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function randomId(min=1, max=10000){
  return parseInt(Math.random()*(max-min))+min
}

export default function handler(req, res) {
  res.status(200).json([
    {id: randomId(), name: 'Caneta', price: 5.60},
    {id: randomId(), name: 'Caderno', price: 15.60},
    {id: randomId(), name: 'Borracha', price: 7.30},
    {id: randomId(), name: 'Tesoura', price: 21.55}
  ])
}
