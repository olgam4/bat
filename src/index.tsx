/* @refresh reload */
import { render } from 'solid-js/web';
import './assets/global.css';
import 'uno.css';

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
