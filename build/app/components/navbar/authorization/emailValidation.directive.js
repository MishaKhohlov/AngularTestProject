const emailValidation = () => {
  //RegExp for email with two symbol after '.', but hard support and expand solution
  //const RegExp = /([a-zA-Z]{2,})+@[a-zA-Z]+?\.[a-zA-Z]{2,}/;

  const EMAIL_REGEXP = /^[^@]+@[^@.]+\.[^@]+$/i;

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, elm, attrs, ctrl) {
      // this will overwrite the default Angular email validator
      ctrl.$validators.email = function (modelValue) {
        if (modelValue && EMAIL_REGEXP.test(modelValue)) {
          if (modelValue.split('.')[1].length >= 2) {
            return true;
          }
        }
        return false;
      };
    }
  };
};

emailValidation.$inject = [];

export {emailValidation};
