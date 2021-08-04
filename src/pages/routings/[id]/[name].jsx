import { useRouter } from "next/router"
import Link from 'next/link'

export default function Name() {
  const router = useRouter()
  return (
    <div>
      <h1>
        {router.query.name}
      </h1>
      <Link href="/routings" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}
