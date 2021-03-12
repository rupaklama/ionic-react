import dayjs from 'dayjs';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';

import { calculateBiorhythm } from '../calculation';
import BiorhythmChart from './BiorhythmChart';

// to format date with dayjs
const formatDate = isoString => {
  return dayjs(isoString).format('MMM D YYYY');
};

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const physical = calculateBiorhythm(birthDate, targetDate);

  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <BiorhythmChart />
        <p>Physical: {physical.toFixed(4)} </p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
