export default function question(req, res) {
  if(req.method==='GET'){
    const{id} = req.query
    res.status(200).json({
      id,
      title: 'Qual é sua cor preferida?',
      answers: ['Branca', 'Vermelha', 'Amarela', 'Verde']
    })

  }else{
    res.status(405).send()
  }
}
