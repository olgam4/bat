interface Props {
  image: string
  hover?: boolean
}

export default function (props: Props) {
  return (
    <div class="relative group">
      <div class="opacity-0 group-hover:opacity-50 transition absolute blur-xl rounded-full bg-gray-900 top-0 h-44 w-44" />
      <img class={`${props.hover && 'hover:scale-125 transition translate-z-1'}`} src={props.image} width="200" />
    </div>
  )
}
