import { StartServer, createHandler, renderStream } from 'solid-start/entry-server'

export default createHandler(renderStream(event => <StartServer event={event} />))
