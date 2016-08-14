import angular from 'angular';
import {authorizationFactory} from './auth.factory';

export const authFact = angular.module('authFact', [])
  .factory('authFactory', authorizationFactory);
