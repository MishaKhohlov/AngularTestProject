/* @ngInject */
const authorizationFactory = ($rootScope, $q) => {
  let dataUser = {
    'aa@a.aa': {
      name: 'Misha Khohlov',
      email: 'aa@a.aa',
      password: '123456'
    }
  };

  let authUser = false;

  function save(user) {
    if (!dataUser[user.email]) {
      dataUser[user.email] = Object.assign({}, user);
    }
  }

  function logout() {
    authUser = false;
    $rootScope.$broadcast('logout', 'Log out');
  }

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

