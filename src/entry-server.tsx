import { StartServer, createHandler, renderStream, renderSync } from 'solid-start/entry-server'

const IS_TAURI = process.env.TAURI === '1'

export default createHandler(IS_TAURI ?
  renderSync(event => <StartServer event={event} />)
  : renderStream(event => <StartServer event={event} />))
