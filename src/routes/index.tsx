import Button from '@components/Button'
import Image from '@components/Image'
import { Link } from 'solid-app-router'

import bat from '@assets/bat.png'
import Counter, { createCounter } from '@components/Counter'

export default function () {
  const counter = createCounter()

  return (
    <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-gray-100/75">
      <h1>Hi</h1>
      <nav class="flex space-x-2">
        <Link href="/about" children={<p>about</p>}/>
        <Link href="/random" children={<p>202</p>}/>
      </nav>
      <Image image={bat} />
      <div class="flex space-x-2">
        <div class="flex flex-col items-center">
          <p>{counter.counter()}</p>
          <Counter {...counter}/>
        </div>
      </div>
    </div>
  )
}
