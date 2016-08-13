import template from './navbar.html';
import { NavbarController as controller } from './navbar.controller';

export const navbarComponent = {
  template,
  controller,
  bindings: {
    links: '<'
  },
  controllerAs: 'nav'
};
