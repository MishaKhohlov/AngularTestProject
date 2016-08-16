import angular from 'angular';
import { aboutComponent } from './about.component';

/**
 * @module
 * @namespace about
 * @class app.components.about: Module about
 * @description
 * A module that can register your own state.
 */
export const about = angular.module('about', [])
.config(($stateProvider) => {
  $stateProvider.state('about', {
    url: '/about',
    template: '<about></about>'
  });
})
.component('about', aboutComponent);
