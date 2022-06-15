interface Props {
  image: string
}

export default function (props: Props) {
  return (
    <img src={props.image} width="200" />
  )
}
