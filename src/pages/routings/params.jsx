import { useRouter } from "next/router"


export default function Params() {
  const {name, id} = useRouter().query
  return (
    <div>
      <h1>
        Rotas Params: {name} e {id}
      </h1>
    </div>
  )
}
