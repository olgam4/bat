import { Ref } from 'solid-js'

export const createModal = () => {
  const [ref, setRef] = createSignal<Ref<any>>(null)

  const showModal = () => {
    ref().showModal()
    ref().addEventListener('click', (event: any) => {
      var rect = ref().getBoundingClientRect();
      var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        ref().close();
      }
    })
  }

  const hideModal = () => {
    ref().close()
  }

  return {
    setRef,
    showModal,
    hideModal,
  }
}

