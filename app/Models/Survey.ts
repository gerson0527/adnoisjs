// app/Models/Survey.ts

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Survey extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customer_id: number

  @column()
  public customer_identification: string

  @column()
  public car_model: string

  @column()
  public purchase_factors: string

  @column()
  public driving_test_rating: number

  @column()
  public satisfaction_rating: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
