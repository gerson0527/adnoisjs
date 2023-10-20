// app/Controllers/Http/SurveyController.ts

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Survey from 'App/Models/Survey';

export default class SurveyController {
  public async create({ request, response }: HttpContextContract) {
    const data = request.only([
      'identification',
      'carModel',
      'factors',
      'testDriveRating',
      'satisfactionRating',
    ]);

    const survey = await Survey.create(data);

    return survey;
  }

  public async index() {
    return Survey.all();
  }

  public async update({ params, request }: HttpContextContract) {
    const survey = await Survey.find(params.id);

    if (!survey) {
      return 'Encuesta no encontrada';
    }

    const data = request.only(['testDriveRating', 'satisfactionRating']);
    survey.merge(data);
    await survey.save();

    return survey;
  }

  public async destroy({ params }: HttpContextContract) {
    const survey = await Survey.find(params.id);

    if (survey) {
      await survey.delete();
    }
  }
}
