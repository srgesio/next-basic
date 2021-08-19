export function getServerSideProps(){

    console.log('Gerou')
    return{
        props:{
            number: Math.random()
        }
    }
}

export default function DinamicOne(props){
    
    return (
        <div>
            <h1>
                Dinâmico #01
            </h1>
            <h2>
                {props.number}
            </h2>
        </div>
    )
}