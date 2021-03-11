import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [birthDate, setBirthDate] = useState('');

  // The toISOString() method converts a Date object into a STRING, using the ISO standard.
  // The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
  const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {/* Ionic default input type is 'text' 
              In Ionic, onChange === onIonChange because of IonInput component
              e.target === e.detail
          */}
        <IonItem>
          <IonLabel position='stacked'>Date of Birth:</IonLabel>
          {/* IonDatetime  is default to US date & time */}
          <IonDatetime
            value={birthDate}
            onIonChange={e => setBirthDate(e.detail.value)}
          />
        </IonItem>

        <BiorhythmCard targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
