class BlogController {
  constructor($scope, $state) {
    this.page = '';
    this.$scope = $scope;
    this.$scope.$on('logout',  () => {
      $state.go('home')
    })
  }

  $onInit() {
    this.page = 'Blog Page';
  }
}

BlogController.$inject = ['$scope', '$state'];

export { BlogController };
