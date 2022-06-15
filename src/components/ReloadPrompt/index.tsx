import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import { useRegisterSW } from 'virtual:pwa-register/solid'
import styles from './style.module.css'

const ReloadPrompt: Component = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className={styles.Container}>
      <Show when={offlineReady() || needRefresh()}>
        <div className={styles.Toast}>
          <div className={styles.Message}>
            <Show
              fallback={<span>New content available, click on reload button to update.</span>}
              when={offlineReady()}
            >
              <span>App ready to work offline</span>
            </Show>
          </div>
          <Show when={needRefresh()}>
            <button className={styles.ToastButton} onClick={() => updateServiceWorker(true)}>Reload</button>
          </Show>
          <button className={styles.ToastButton} onClick={() => close()}>Close</button>
        </div>
      </Show>
    </div>
  )
}

export default ReloadPrompt
