/**
 * @type directive
 * @class authorization.Directive:emailValid
 * @memberOf authorization
 * @description
 * This validation data in email form through regExp and js logic.(example aa@a.aa)
 * You can use another solution:
 * RegExp for email with two symbol after '.', but hard support and expand solution
 * const RegExp = /([a-zA-Z]{2,})+@[a-zA-Z]+?\.[a-zA-Z]{2,}/;
 * @example
 *  <input type="email" name="email" ng-model="register.mail" email-valid>
 */

const emailValidation = () => {
  const EMAIL_REGEXP = /^[^@]+@[^@.]+\.[^@]+$/i;

  return {
    restrict: 'A',
    require: '?ngModel',
    link: (scope, elm, attrs, ctrl) => {
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
