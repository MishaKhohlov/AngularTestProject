class AuthorizationController {
  constructor(authFactory) {
    this.authFactory = authFactory;
    this.errorShort = 'Is too short.';
    this.errorLong = 'Is too long.';
    this.invalidValue = 'Enter a valid data';
    this.passwordConfirm = 'Password is not similar';
    this.passSimilar = false;
  }

  $onInit() {

  }

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


  logged(ev, form) {
    ev.preventDefault();
    this.authFactory.logged({
      email: form.email.$viewValue,
      password: form.password.$viewValue
    });
    this.login = false;
  }

  changePass(form) {
    this.passSimilar = form.password.$viewValue === form.password_confirm.$viewValue;
  }
}

AuthorizationController.$inject = ['authFactory'];

export {AuthorizationController};
