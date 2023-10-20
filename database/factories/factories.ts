// database/factories/SurveyFactory.ts

import Factory from '@ioc:Adonis/Lucid/Factory';
import Survey from 'App/Models/Survey';

export const SurveyFactory = Factory.define(Survey, ({ faker }) => {
  const factors = [
    'Reputación de la marca',
    'Las opciones de financiamiento',
    'El desempeño al manejarlo',
    'Recomendaciones de amigos o familiares',
    'Otros',
  ];

  return {
    identification: faker.random.alphaNumeric(6),
    carModel: faker.vehicle.model(),
    factors: factors[Math.floor(Math.random() * factors.length)],
    testDriveRating: Math.floor(Math.random() * 5) + 1,
    satisfactionRating: Math.floor(Math.random() * 5) + 1,
  };
}).build();
