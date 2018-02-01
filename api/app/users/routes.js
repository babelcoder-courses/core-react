import controller from './controller'

export function setup(router) {
  router
    .get('/me', controller.getProfile)
    .get('/:id', controller.get)
    .get('/', controller.getAll)
    .post('/', controller.create)
}
