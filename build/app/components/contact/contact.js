import angular from 'angular';
import {contactComponent} from './contact.component';

/**
 * @module
 * @namespace contact
 * @class app.components.contact:Module contact
 * @description
 * A module that can register your own state.
 */

export const contact = angular.module('contact', [])
  .config(config)
  .component('contact', contactComponent);

function config($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact></contact>'
  });
}

config.$inject = ['$stateProvider'];