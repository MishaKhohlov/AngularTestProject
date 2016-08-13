import angular from 'angular';
import { blogComponent } from './blog.component';

export const blog = angular.module('blog', [])
.config(($stateProvider) => {
  $stateProvider.state('blog', {
    url: '/blog',
    template: '<blog></blog>'
  });
})
.component('blog', blogComponent);
