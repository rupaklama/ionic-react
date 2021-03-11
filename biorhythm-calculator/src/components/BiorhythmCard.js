import dayjs from 'dayjs';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';

// to format date with dayjs
const formatDate = isoString => {
  return dayjs(isoString).format('MMM D YYYY');
};

const BiorhythmCard = ({ targetDate }) => {
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p>Physical: 83%</p>
        <p>Emotional: 83%</p>
        <p>Intellectual: 83%</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
