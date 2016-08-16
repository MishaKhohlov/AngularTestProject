import angular from 'angular';
import { navbarComponent } from './navbar.component';
import { authorization }  from './authorization/authorization';

/**
 * @module
 * @namespace navbar
 * @class app.components.navbar:Module navbar
 * @description
 * A module that can connect authorization components in dependencies.
 */

export const navbar = angular.module('navbar', [authorization.name])
  .component('navbar', navbarComponent);
