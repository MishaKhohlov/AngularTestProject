class AuthorizationController {
  constructor(authFactory) {
    this.authFactory = authFactory;
    
    this.errorShort = 'Password is too short';
    this.errorLong = 'Password is too long.';
  }

  $onInit() {

  }

  registered(valid) {
    console.log(valid);
    if(valid) {
      this.authFactory.save();
    }
  }
  
  login() {
    
  }
}

AuthorizationController.$inject = ['authFactory'];

export { AuthorizationController };
