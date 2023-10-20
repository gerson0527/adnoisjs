// app/Controllers/Http/SurveysController.ts

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Survey from 'App/Models/Survey'

export default class SurveysController {
  public async index({ response }: HttpContextContract) {
    const surveys = await Survey.all()
    return response.status(200).json(surveys)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['customer_id', 'customer_identification', 'car_model', 'purchase_factors', 'driving_test_rating', 'satisfaction_rating'])
    const survey = await Survey.create(data)
    return response.status(201).json(survey)
  }

  public async show({ params, response }: HttpContextContract) {
    const survey = await Survey.find(params.id)
    if (!survey) {
      return response.status(404).json({ message: 'Encuesta no encontrada' })
    }
    return response.status(200).json(survey)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const survey = await Survey.find(params.id)
    if (!survey) {
      return response.status(404).json({ message: 'Encuesta no encontrada' })
    }
    const data = request.only(['customer_id', 'customer_identification', 'car_model', 'purchase_factors', 'driving_test_rating', 'satisfaction_rating'])
    survey.merge(data)
    await survey.save()
    return response.status(200).json(survey)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const survey = await Survey.find(params.id)
    if (!survey) {
      return response.status(404).json({ message: 'Encuesta no encontrada' })
    }
    await survey.delete()
    return response.status(204)
  }
}
