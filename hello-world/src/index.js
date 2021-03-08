// NOTE - we can also set the Default Style Programmatically if we want to
// import { setupConfig } from '@ionic/react';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

// NOTE - we need all the CSS below to make Full Ionic App
// Full Ionic App meaning where the Root Element is an Ion App Component -  <IonApp>
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// we can call this function before we tell react to render our app
// setupConfig({
//   // mode is ios or md (material design for android)
//   mode: 'ios',
// });
// NOTE - This is really helpful for testing only
// If we do so, we will use main benefit of IONIC - Adaptive Styling Feature

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
