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
.config(($stateProvider) => {
  $stateProvider.state('blog', {
    url: '/blog',
    template: '<blog></blog>',
    resolve: {/* @ngInject */
      promiseObj: (authFactory) => {
        return authFactory.auth();
      }
    }
  });
})
.component('blog', blogComponent);
