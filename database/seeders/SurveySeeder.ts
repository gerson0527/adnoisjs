'use strict'

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Survey from 'App/Models/Survey'

export default class SurveySeeder extends BaseSeeder {
  public async run () {
    await Survey.createMany([
      {
        customer_id: 1,
        customer_identification: '123456',
        car_model: 'Toyota Camry',
        purchase_factors: 'Reputación de la marca',
        driving_test_rating: 5,
        satisfaction_rating: 4,
      },
      {
        customer_id: 2,
        customer_identification: '789012',
        car_model: 'Honda Civic',
        purchase_factors: 'El desempeño al manejarlo',
        driving_test_rating: 4,
        satisfaction_rating: 5,
      },
      // Puedes agregar más registros de encuestas según tus necesidades
    ])
  }
}
