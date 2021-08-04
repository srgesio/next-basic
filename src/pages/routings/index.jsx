import router,{ useRouter } from "next/router"
import Link from 'next/link'


export default function Routings() {
  const {name, id} = useRouter().query

  function navigation(url, params){
    if(params){
        router.push({
            pathname: url,
            query:{
                ...params
            }
        })      
    }else{ 
        router.push(url)
    }
  }
  return (
    <div>
      <h1>
        Rotas Index
      </h1>
      <ul>
          <Link href="/routings/params?id=12&name=Ana" passHref>
            <li>
                Params
            </li>
          </Link>
          <Link href="/routings/123/buscar" passHref>
            <li>
                Buscar
            </li>
          </Link>
          <Link href="/routings/123/Daniel" passHref>
            <li>
                Daniel
            </li>
          </Link>
      </ul>
      <div>
          <button onClick={()=> router.push("/routings/123/buscar")}>
              Buscar
          </button>
          <button onClick={()=> navigation("/routings/123/Daniel")}>
              Daniel
          </button>
          <button onClick={()=> navigation("/routings/params", {id: 123, name: 'Ana'})}>
              Params
          </button>
      </div>
    </div>
  )
}
