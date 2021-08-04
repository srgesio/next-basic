import { useRouter } from "next/router"
import Link from 'next/link'

export default function Search() {
  const router = useRouter()
  return (
    <div>
      <h1>
        {router.query.id}
      </h1>
      <Link href='/routings' passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}
