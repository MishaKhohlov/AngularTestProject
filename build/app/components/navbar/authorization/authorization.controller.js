class AuthorizationController {
  constructor(authFactory) {
    this.authFactory = authFactory;
  }

  $onInit() {

  }

  saveData() {
    this.authFactory.save();
  }
}

AuthorizationController.$inject = ['authFactory'];

export { AuthorizationController };
