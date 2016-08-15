const nameValidation = () => {
  //RefExp for two words, but hard support and expand solution
  //const NAME_REGEXP = /^[\w]+(\s+[\w]+)$/;

  //only words
  const WORD = /^([a-z]+)$/i;
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.username = function (modelValue) {
        if (modelValue) {
          const arr = modelValue.split(' ');
          if (arr.length === 2 && WORD.test(arr[0]) && WORD.test(arr[1])) {
            return true;
          }
        }
        return false;
      };
    }
  };
};

nameValidation.$inject = [];

export {nameValidation};
