import angular from 'angular';
import {authorizationFactory} from './auth.factory';

/**
 * @module
 * @namespace authFact
 * @class app.components.authFact:Module authFact
 * @description
 * A module that can register factory.
 */
export const authFact = angular.module('authFact', [])
  .factory('authFactory', authorizationFactory);
