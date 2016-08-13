import angular from 'angular';
import { contactComponent } from './contact.component';

export const contact = angular.module('contact', [])
.config(($stateProvider) => {
  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact></contact>'
  });
})
.component('contact', contactComponent);
