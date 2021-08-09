export function getStaticProps(){
    
    return{
        props:{
            numero: Math.random()
        }
    }
}

export default function Static(props){

    return(
        <div>
            <span>
                Aleatório: {props.numero}
            </span>
        </div>
    )
}