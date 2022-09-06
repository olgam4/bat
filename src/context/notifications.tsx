import type { FlowComponent } from 'solid-js'

type Notification = {
  message: string;
  id: string;
  visible: boolean;
}

export const NotificationContext = createContext([
  {
    notifications: [] as Notification[],
  }, {
    addNotification: (_notif: string) => { },
  }
])

interface Props {
  notifications?: Notification[];
}

export const NotificationProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore({
    notifications: props.notifications || [],
  })

  const notifications = [
    state,
    {
      addNotification: (message: string) => {
        const id = Math.random().toString(36).slice(2)
        setState({
          notifications: [...state.notifications, { message, id, visible: true }],
        })
      },
    }
  ]

  return (
    <NotificationContext.Provider value={notifications}>
        {props.children}
    </NotificationContext.Provider>
  )
}

