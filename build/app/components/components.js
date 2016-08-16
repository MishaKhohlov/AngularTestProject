import angular from 'angular';
import { navbar } from './navbar/navbar';
import { home } from './home/home';
import { contact } from './contact/contact';
import { blog } from './blog/blog';
import { authFact } from './auth.factory/auth';

/**
 * @ngdoc module
 * @namespace components
 * @class app.components:Module components
 * @description
 * A module that can connect general dependent components.
 */

const components = angular.module('app.components', [
  navbar.name,
  home.name,
  contact.name,
  blog.name,
  authFact.name
]);

export { components };
