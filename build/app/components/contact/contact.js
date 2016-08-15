import angular from 'angular';
import { contactComponent } from './contact.component';

/**
 * @ngdoc module
 * @namespace app.components.contact
 * @description
 * A module that can register your own state.
 */
export const contact = angular.module('contact', [])
.config(($stateProvider) => {
  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact></contact>'
  });
})
.component('contact', contactComponent);
