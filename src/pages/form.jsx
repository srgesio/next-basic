import { useEffect, useState } from "react"

export default function Form(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [users, setUsers] = useState([])

    async function handleSubmit(){
        await fetch('/api/form',{
            method: 'POST',
            body: JSON.stringify({
                name,
                age
            }) 
        })
        
        const result = await fetch('/api/form')
        const allUsers = await result.json()

        setUsers(allUsers)
        setName('')
        setAge(0)
    }

    function showUsers(){
        return users.map((user,id)=>{
            return <li key={id}>{user.name} tem {user.age} anos</li>
        })
    }
    return (
        <div>
            <h1>Integração com API</h1>
            <div>
                <input
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="number"
                    value={+age} 
                    onChange={e => setAge(+e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>
                    Enviar
                </button>
            </div>

            <div>
                {showUsers()}
            </div>

        </div>
    )
}