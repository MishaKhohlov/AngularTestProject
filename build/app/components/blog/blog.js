import angular from 'angular';
import { blogComponent } from './blog.component';

/**
 * @module
 * @namespace blog
 * @class app.components.blog:Module blog
 * @description
 * A module that can register your own state and html5mode turn on..
 */
export const blog = angular.module('blog', [])
.config(config)
.component('blog', blogComponent);

function config($stateProvider) {
  $stateProvider.state('blog', {
    url: '/blog',
    template: '<blog></blog>',
    resolve: {
      promiseObj: ['authFactory', (authFactory) => {
        return authFactory.auth();
      }]
    }
  });
}
config.$inject = ['$stateProvider'];
