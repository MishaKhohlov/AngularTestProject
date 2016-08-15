class NavbarController {
  constructor($scope, authFactory) {
    this.authFactory = authFactory;
    this.loginForm = false;
    this.registerForm = false;
    this.authUser = false;
    this.$scope = $scope;
    this.$scope.$on('logged',  (event, data) => {
      this.authUser = data;
    });
  }

  logout() {
    this.authUser = false;
    this.authFactory.logout();
  }
}

NavbarController.$inject = ['$scope', 'authFactory'];

export { NavbarController };
