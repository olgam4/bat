import type { Component, Ref } from 'solid-js'
import type { createInput } from './input'
import Input from './input'

const submit = (ref: Ref<any>, accessor: any) => {
  const callback = accessor() || (() => {})
  ref.onsubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    e.stopPropagation()
    callback()
  }
}

interface FormData {
  [key: string]: string | number | boolean
}

interface Props {
  onSubmit?: (data: FormData) => void
  inputs: ReturnType<typeof createInput>[]
}

const Form: Component<Props> = (props) => {
  const { onSubmit, inputs } = props

  const handleSubmit = () => {
    if (!onSubmit) return
    let formData: FormData = {}
    inputs.forEach((input) => {
      formData[input.name()] = input.value()
    })
    onSubmit(formData)
  }

  return (
    <form
      use:submit={handleSubmit}
      class="flex flex-col space-y-2"
    >
      <For each={inputs} children={(input) => (
        <Input {...input} />
      )}
        />
    </form>
  )
}

export default Form
