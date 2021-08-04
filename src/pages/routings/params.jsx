import { useRouter } from "next/router"
import Link from 'next/link'

export default function Params() {
  const {name, id} = useRouter().query
  return (
    <div>
      <h1>
        Rotas Params: {name} e {id}
      </h1>
      <Link href='/routings' passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}
