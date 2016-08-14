import angular from 'angular';
import { navbar } from './navbar/navbar';
import { home } from './home/home';
import { contact } from './contact/contact';
import { blog } from './blog/blog';
import { authFact } from './auth.factory/auth';


const components = angular.module('app.components', [
  navbar.name,
  home.name,
  contact.name,
  blog.name,
  authFact.name
]);

export { components };
