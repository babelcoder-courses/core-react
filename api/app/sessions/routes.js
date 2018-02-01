import controller from './controller'

export function setup(router) {
  router.post('/', controller.create).delete('/', controller.destroy)
}
