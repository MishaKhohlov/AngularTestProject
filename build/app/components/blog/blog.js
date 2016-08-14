import angular from 'angular';
import { blogComponent } from './blog.component';

export const blog = angular.module('blog', [])
.config(($stateProvider) => {
  $stateProvider.state('blog', {
    url: '/blog',
    template: '<blog></blog>',
    resolve: {
      promiseObj: (authFactory) => {
        return authFactory.auth();
      }
    }
  });
})
.component('blog', blogComponent);
