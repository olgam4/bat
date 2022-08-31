import { hydrate } from 'solid-js/web'
import { StartClient } from 'solid-start/entry-client'

console.log(`
<!--       _          
       .__(.)< (MEOW) 
        \\___)         
~~~~~~~~~~~~~~~~~~--> 
`)
if (typeof window !== 'undefined') hydrate(() => <StartClient />, document)

