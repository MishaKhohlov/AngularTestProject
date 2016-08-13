import template from './authorization.html';
import { AuthorizationController as controller } from './authorization.controller';

export const authorizationComponent = {
  template,
  controller,
  bindings: {
    register: '=',
    login: '='
  },
  controllerAs: 'auth'
};
