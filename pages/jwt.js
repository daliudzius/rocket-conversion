import { useSession } from "next-auth/react"

export default function MePage() {
  const { data } = useSession()

  return (
    <>
      <h1>Session Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <h1>JSON Web Token</h1>
      <iframe src="/api/examples/jwt" />
    </>
  )
}
