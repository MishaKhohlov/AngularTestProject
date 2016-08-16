import {appComponent} from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {components} from './components/components';

/**
 * @module
 * @namespace appModule
 * @class app
 * @description
 * A module that can connect general dependencies and component module.
 */

angular.module('app', [
  uiRouter,
  ngAnimate,
  components.name
])
  .component('app', appComponent);
