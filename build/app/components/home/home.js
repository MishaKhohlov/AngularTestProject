import angular from 'angular';
import {homeComponent} from './home.component';

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
