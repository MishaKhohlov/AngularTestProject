import {appComponent} from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {components} from './components/components';

/**
 * @ngdoc module
 * @namespace angular
 * @memberOf angular
 * @class angular.app
 * @description
 * A module that can connect general dependencies and component module.
 */

angular.module('app', [
  uiRouter,
  ngAnimate,
  components.name
])
  .component('app', appComponent);
