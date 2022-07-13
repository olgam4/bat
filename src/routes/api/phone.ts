interface Props {
  request: Request
}

export async function get({ request }: Props) {
  console.log('get', request)
  return new Response('Hello World!')
}

export async function post({ request }: Props) {
  const body = await request.json()
  console.log('post', body)
  return new Response(JSON.stringify(body))
}
