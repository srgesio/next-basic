export default function Handler(req, res){

    const id = +req.query.id
    res.status(200).json({
        id,
        name: `João Gomes ${id}`,
        email: `jgjgjggggggggg${id}@gmail.com`
    })
}