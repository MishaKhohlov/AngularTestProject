import angular from 'angular';
import {scrollEvent} from './scroll.directive';
import {homeComponent} from './home.component';

/**
 * @module
 * @namespace home
 * @class app.components.home:Module home
 * @description
 * A module that can register your own state and html5mode turn on.. and connect directive scrollEvent
 */

export const home = angular.module('home', [])
  .config(config)
  .directive('scrollEvent', scrollEvent)
  .component('home', homeComponent);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
