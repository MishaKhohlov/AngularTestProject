class AuthorizationController {
  constructor(authFactory) {
    this.authFactory = authFactory;
    
    this.errorShort = 'Is too short.';
    this.errorLong = 'Is too long.';
    this.invalidValue = 'Enter a valid data'
  }

  $onInit() {

  }

  registered(ev, valid) {
    ev.preventDefault();
    console.log(valid);
    if(valid) {
      this.authFactory.save();
    }
  }

  logged(ev, valid) {
    ev.preventDefault();
    console.log(valid);
  }

  resetFormRegister(ev) {
    ev.preventDefault();
    this.registered = {};
    this.login = {};
  }
}

AuthorizationController.$inject = ['authFactory'];

export { AuthorizationController };
