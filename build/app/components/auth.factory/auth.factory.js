const authorizationFactory = ($q) => {
  let dataUser = {
    'aa@a.aa': {
      name: 'Misha',
      email: 'aa@a.aa',
      password: 111111
    }
  };
  let authUser = false;

  function save(user) {
    if (!dataUser[user.email]) {
      dataUser[user.email] = user;
    }
    console.log(dataUser);
  }
  
  function logout() {
    authUser = false
  }
  
  function logged(user) {
    if (dataUser[user.email]) {
      if (dataUser[user.email].password === +user.password) {
        authUser = user;
        return
      }
      authUser = false
    }
  }

    function auth() {
      const prom = $q.defer();
      console.log(authUser);
      if (authUser) {
        prom.resolve(authUser)
      } else {
        prom.reject("Log out")
      }
      return prom.promise
    }

    return {save, logged, auth}
  };

  authorizationFactory.$inject = ['$q'];

  export {authorizationFactory};

