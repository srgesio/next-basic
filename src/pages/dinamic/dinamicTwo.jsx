export async function getServerSideProps(){
    console.log('Gerou')
    
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()
    return {
        props: {
            products
        }
    }
}

export default function DinamicTwo(props){
    
    function showProducts(){
        return props.products.map(product => {
            return (
            <li key={product.id}>
                {product.id} - {product.name} tem preço de R$ {product.price}
            </li>)
        })
    }
    return (
        <div>
            <h1>
                Produtos Dinâmicos
            </h1>
            <ul>
                {showProducts()}
            </ul>
        </div>
    )
}