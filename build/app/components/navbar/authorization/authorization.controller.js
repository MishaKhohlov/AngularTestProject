/**
 * @type controller
 * @class authorization.Controller:AuthorizationController
 * @memberOf authorization
 * @description
 * Implement register and loin form, validation and broadcast data to factory
 */

class AuthorizationController {
  constructor(authFactory) {
    this.authFactory = authFactory;
    this.errorShort = 'Is too short.';
    this.errorLong = 'Is too long.';
    this.invalidValue = 'Enter a valid data';
    this.passwordConfirm = 'Password is not similar';
    this.regExpPass = '\\w+';
    this.passSimilar = false;
  }

  /**
   * @method
   * @name registered
   * @memberOf authorization.controller:AuthorizationController
   * @param {Object} ev - event form
   * @param {Object} form - form obj with data from input
   * @description
   * This method handle to the factory method and implement logout
   */
  registered(ev, form) {
    ev.preventDefault();
    this.authFactory.save({
      name: form.username.$viewValue,
      email: form.email.$viewValue,
      password: form.password.$viewValue
    });
    this.register = false;
    this.passSimilar = false;
  }

  /**
   * @method
   * @name logged
   * @memberOf authorization.controller:AuthorizationController
   * @param {Object} ev - event form
   * @param {Object} form - form obj with data from input
   * @description
   * This method handle to the factory method and implement logged
   */
  logged(ev, form) {
    ev.preventDefault();
    this.authFactory.logged({
      email: form.email.$viewValue,
      password: form.password.$viewValue
    });
    this.login = false;
  }

  /**
   * @method
   * @name changePass
   * @memberOf authorization.controller:AuthorizationController
   * @param {Object} form - obj with data from input
   * @description
   * compare password если они одинаковые return true
   */
  changePass(form) {
    this.passSimilar = form.password.$viewValue === form.password_confirm.$viewValue;
  }
}

AuthorizationController.$inject = ['authFactory'];

export {AuthorizationController};
