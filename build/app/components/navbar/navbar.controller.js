/**
 * @type controller
 * @class navbar.Controller:NavbarController
 * @memberOf navbar
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
   * @method
   * @name logout
   * @memberOf navbar.Controller:NavbarController
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
