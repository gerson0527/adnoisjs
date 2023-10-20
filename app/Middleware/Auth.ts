'use strict'

class Auth {
  async handle ({ request, response, auth }, next) {
    try {
      // Verificar si el usuario est� autenticado
      await auth.check()

      // Continuar con la solicitud
      await next()
    } catch (error) {
      // Manejar el caso en el que el usuario no est� autenticado
      return response.unauthorized('Acceso no autorizado')
    }
  }
}

module.exports = Auth
