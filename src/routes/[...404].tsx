import { Link } from 'solid-app-router'
export default function () {
  return (
    <div class="full flex-center flex-col bg-gray-100/50 text-gray-400">
      <h1 class="text-4xl font-extrabold">404</h1>
      <div class="flex space-x-1 mt-1">
        <p>Page not found</p>
        <div class="pt-1">
          <div class="i-carbon-face-dissatisfied-filled"/>
        </div>
      </div>
      <Link href="/" class="flex items-center space-x-1 mt-4 transition hover:(text-gray-400/40)">
        <div class="i-carbon-arrow-left text-3xl" />
        <p class="font-extrabold">Go to home</p>
      </Link>
    </div>
  )
}
