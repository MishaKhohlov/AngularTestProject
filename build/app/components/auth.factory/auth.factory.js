/**
 * @type factory
 * @class authFact.factory:authFactory
 * @memberOf authFact
 * @description
 * Provides processing of user data, registration and logged
 * @example
 *  class AuthorizationController {
 *    constructor(authFactory) {
 *      this.authFactory = authFactory;
 *    }
 *    registered(data) {
 *      this.authFactory.save(data);
 *    }
 *  }
 */

const authorizationFactory = ($rootScope, $q) => {
  let dataUser = {
    'aa@a.aa': {
      name: 'Misha Khohlov',
      email: 'aa@a.aa',
      password: '123456'
    }
  };

  let authUser = false;

  /**
   * @method
   * @name registered
   * @memberOf authFact.factory:authFactory
   * @param {Object} user - user obj
   * @description
   * Save data user
   */
  function save(user) {
    if (!dataUser[user.email]) {
      dataUser[user.email] = Object.assign({}, user);
    }
  }

  /**
   * @method
   * @name logout
   * @memberOf authFact.factory:authFactory
   * @description
   * logout and clear temporary user data
   */
  function logout() {
    authUser = false;
    $rootScope.$broadcast('logout', 'Log out');
  }

  /**
   * @method
   * @name logged
   * @memberOf authFact.factory:authFactory
   * @param {Object} user - user obj
   * @description
   * checks for a user and if there gives login
   */
  function logged(user) {
    if (dataUser[user.email]) {
      if (dataUser[user.email].password === user.password) {
        authUser = dataUser[user.email];
        $rootScope.$broadcast('logged', authUser);
        return;
      }
      authUser = false;
    }
  }

  /**
   * @method
   * @name auth
   * @memberOf authFact.factory:authFactory
   * @description
   * if the logged return resolve
   */
  function auth() {
    const prom = $q.defer();
    if (authUser) {
      prom.resolve(authUser);
    } else {
      prom.reject('Log out');
    }
    return prom.promise;
  }

  return {save, logged, auth, logout};
};

authorizationFactory.$inject = ['$rootScope', '$q'];

export {authorizationFactory};

