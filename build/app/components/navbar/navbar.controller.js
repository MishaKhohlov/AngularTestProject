/**
 * @ngdoc controller
 * @name navbar.controller:NavbarController
 * @memberOf angular.navbar
 * @description
 * Open/hide autorization form, show data about user and implement logout.
 */

class NavbarController {
  constructor($scope, authFactory) {
    this.authFactory = authFactory;
    this.loginForm = false;
    this.registerForm = false;
    this.authUser = false;
    this.$scope = $scope;
    this.$scope.$on('logged', (event, data) => {
      this.authUser = data;
    });
  }

  /**
   * @ngdoc method
   * @name logout
   * @methodOf navbar.controller:NavbarController
   * @description
   * This method handle to the factory method and implement logout
   */
  logout() {
    this.authUser = false;
    this.authFactory.logout();
  }
}

NavbarController.$inject = ['$scope', 'authFactory'];

export { NavbarController };
