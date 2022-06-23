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
  let formRef: Ref<any>

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
      ref={formRef}
      class="flex flex-col space-y-2"
    >
      <For each={inputs} children={(input) => (
        <Input {...input} />
      )}
        />
      <div class="self-end">
      </div>
    </form>
  )
}

export default Form
