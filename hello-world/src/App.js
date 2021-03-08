import React, { useState } from 'react';

// importing ionic button component
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';

// ionic icons
import { play as playIcon } from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    // Full Ionic App meaning where the Root Element is an Ion App Component
    // we always have Two Components inside of Ion App component - IonHeader & IonContent
    <IonApp>
      <IonHeader>
        {/* Inside header we typically have an Ion Toolbar like Toolbar in Mobile App */}
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* ion-padding is one of those Optional CSS we imported in index.js */}
      <IonContent className='ion-padding'>
        <IonButton color='warning' onClick={handleClick}>
          {/* IonIcon to add icon, 
          slot prop is to where to display relative to the button - start, end & icon-only
        */}
          <IonIcon icon={playIcon} slot='start' />
          Click Me
        </IonButton>

        {/** Toast Component displays a simple message by popping up at the bottom of the screen */}
        <IonToast isOpen={showToast} message='Hello world!' />
      </IonContent>
    </IonApp>
  );
}

export default App;
