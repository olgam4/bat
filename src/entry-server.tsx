import { StartServer, renderStream, createHandler } from 'solid-start/entry-server'

// @ts-ignore
export default createHandler(renderStream(context => <StartServer context={context} />))
