import angular from 'angular';
import {authorizationComponent} from './authorization.component';
import { authFact } from '../../auth.factory/auth';

export const authorization = angular.module('authorization', [authFact.name])
  .component('authorization', authorizationComponent);
