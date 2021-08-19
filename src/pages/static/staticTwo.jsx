export function getStaticProps(){
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function StaticTwo(props){
    
    return (
        <div>
            <h1>
                Estático #02
            </h1>
            <h2>
                {props.number}
            </h2>
        </div>
    )
}