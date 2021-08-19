export function getStaticProps(){
    return {
        revalidate: 7,
        props: {
            number: Math.random()
        }
    }
}

export default function StaticThree(props){
    
    return (
        <div>
            <h1>
                Estático #03
            </h1>
            <h2>
                {props.number}
            </h2>
        </div>
    )
}