const authorizationFactory = () => {
  let dataUser = [];

  function save(...user) {
    dataUser.push(...user);
    console.log(dataUser);
  }

  function logged(user) {
    console.log(user);
  }

  return {save, logged}
};

authorizationFactory.$inject = [];

export {authorizationFactory};

