import test from 'japa';
import supertest from 'supertest';
import Database from '@ioc:Adonis/Lucid/Database';

test.group('Surveys Controller', (group) => {
  group.before(async () => {
    await Database.beginGlobalTransaction();
  });

  group.after(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test('List Surveys', async (assert) => {
    const response = await supertest('http://localhost:3333').get('/surveys').expect(200);
    // Añade aserciones para verificar la respuesta, por ejemplo:
    assert.isArray(response.body);
  });

  test('Create Survey', async (assert) => {
    const surveyData = {
      // Datos de la encuesta que deseas crear
    };

    const response = await supertest('http://localhost:3333').post('/surveys')
      .send(surveyData)
      .expect(201);
    // Añade aserciones para verificar la respuesta, por ejemplo:
    assert.exists(response.body.id);
  });

  // Añade más pruebas para las otras acciones aquí
});
