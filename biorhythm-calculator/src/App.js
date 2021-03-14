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
import { useLocalStorage } from './hooks';

function App() {
  // This custom hook also works as a useState & also saves value to local storage
  // set initial value to be local storage's default value
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', ''); // key / default value
  console.log(birthDate);
  console.log(setBirthDate);

  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  // The toISOString() method converts a Date object into a STRING, using the ISO standard.
  // The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
  // const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rupak Biorhythms</IonTitle>
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

        <IonItem>
          <IonLabel position='stacked'>Target Date:</IonLabel>
          <IonDatetime
            value={targetDate}
            onIonChange={e => setTargetDate(e.detail.value)}
          />
        </IonItem>

        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
      </IonContent>
    </IonApp>
  );
}

export default App;
