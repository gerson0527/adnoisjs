import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'surveys'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.integer('customer_id')
      table.string('customer_identification', 255)
      table.string('car_model', 255)
      table.string('purchase_factors', 255)
      table.integer('driving_test_rating')
      table.integer('satisfaction_rating')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
