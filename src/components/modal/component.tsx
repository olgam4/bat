import Paragraph from "@islands/paragraph"
import type { FlowComponent, Ref } from "solid-js"
import type { createModal } from "./reactivity"

interface Props extends ReturnType<typeof createModal> { }

export const Modal: FlowComponent<Props> = (props) => {
  let ref: Ref<any>

  onMount(() => {
    props.setRef(ref)
  })

  return (
    <dialog
      ref={ref}
    >
      <div class="p-10">
        {props.children}
      </div>
      <div class="flex justify-center">
        <button
          onClick={props.hideModal}
          class="px-2 rounded-md text-white bg-gray-600"
        >
          <Paragraph key='close' />
        </button>
      </div>
    </dialog>
  )
}
