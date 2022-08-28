import { hydrate } from 'solid-js/web'
import { StartClient } from 'solid-start/entry-client'

console.log(`
<!--       _          \n
       .__(.)< (MEOW) \n
        \___)         \n
~~~~~~~~~~~~~~~~~~--> 
`)
hydrate(() => <StartClient />, document)
