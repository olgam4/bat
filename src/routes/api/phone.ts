interface Props {
  request: Request
}

export async function GET({ request }: Props) {
  console.log('get', request)
  return new Response('Hello World!')
}

export async function POST({ request }: Props) {
  const body = await request.json()
  console.log('post', body)
  return new Response(JSON.stringify(body))
}
