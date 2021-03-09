import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel>Name:</IonLabel>

          {/* Ionic default input type is 'text' 
              In Ionic, onChange === onIonChange because of IonInput component
              e.target === e.detail
          */}
          <IonInput value={name} onIonChange={e => setName(e.detail.value)} />
        </IonItem>
        <p>Name: {name} </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
