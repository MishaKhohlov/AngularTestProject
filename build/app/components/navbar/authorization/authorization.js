import angular from 'angular';
import {authorizationComponent} from './authorization.component';
import {emailValidation} from './emailValidation.directive';
import {nameValidation} from './fullNameValidation.directive';

/**
 * @ngdoc module
 * @namespace app.components.authorization
 * @description
 * A module that can connect directive emailValid and nameValid.
 */
export const authorization = angular.module('authorization', [])
  .directive('emailValid', emailValidation)
  .directive('nameValid', nameValidation)
  .component('authorization', authorizationComponent);
