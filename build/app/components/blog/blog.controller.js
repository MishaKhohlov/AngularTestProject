/**
 * @type controller
 * @class blog.controller:BlogController
 * @memberOf blog
 * @description
 * watch for event logout and  when it happen redirect to home page 
 */

class BlogController {
  constructor($scope, $state) {
    this.page = 'Blog Page';
    this.$scope = $scope;
    this.$scope.$on('logout',  () => {
      $state.go('home');
    });
  }
}

BlogController.$inject = ['$scope', '$state'];

export { BlogController };
