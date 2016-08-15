import angular from 'angular';
import { navbarComponent } from './navbar.component';
import { authorization }  from './authorization/authorization';

/**
 * @ngdoc module
 * @namespace app.components.navbar
 * @description
 * A module that can connect authorization components in dependencies.
 */

export const navbar = angular.module('navbar', [authorization.name])
  .component('navbar', navbarComponent);
