const users = []

export default function form(req, res){
    if(req.method==='POST'){
        const user = JSON.parse(req.body)
        users.push(user)
        res.status(200).send()
    }else{
        res.status(200).json(users)

    }
}