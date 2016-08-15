import angular from 'angular';
import {homeComponent} from './home.component';

/**
 * @ngdoc module
 * @namespace app.components.home
 * @description
 * A module that can register your own state and html5mode turn on.
 */
export const home = angular.module('home', [])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  })
  .component('home', homeComponent);
