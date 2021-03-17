import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import './Home.css';

function formatMoney(amount: number) {
  return '$' + amount.toFixed(2);
}

const Home: React.FC = () => {
  const balance = 123;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        Your balance is {formatMoney(balance)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
