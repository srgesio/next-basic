export async function getStaticPaths(context){
    const res = await fetch(`http://localhost:3000/api/studentApi/tutors`)
    const ids = await res.json()

    const paths = ids.map(id=>{
        return { params: {id:`${id}`}}
    })
    return{
        fallback: true,
        paths
    }
}
export async function getStaticProps(context){
    const res = await fetch(`http://localhost:3000/api/studentApi/${context.params.id}`)
    const student = await res.json()
    return{
        props:{
            student
        }
    }
}

export default function StudentForId(props){
    const {student} = props
    return(
        <div>
            <h1>Alunos</h1>
            {student ?
            
                <ul>
                    <li>{student.id}</li>
                    <li>{student.name}</li>
                    <li>{student.email}</li>
                </ul>
            : false
        }
        </div>
    )
}