class ContactController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.page = '';
    this.testPromises = '';
  }

  $onInit() {
    this.page = 'Contact';
    this.loadRandom();
  }

  loadRandom() {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => {resolve('test async await')}, 2000);
    });
    promise.then((data) => {
      this.testPromises = data;
      this.$rootScope.$apply();
    });
  }
}

ContactController.$inject = ['$rootScope'];

export { ContactController };
