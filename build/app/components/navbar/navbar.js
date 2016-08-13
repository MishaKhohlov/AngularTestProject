import angular from 'angular';
import { navbarComponent } from './navbar.component';
import { authorization }  from './authorization/authorization';

export const navbar = angular.module('navbar', [authorization.name])
  .component('navbar', navbarComponent);
