const authorizationFactory = () => {
  let dataUser = [];

  function save(...user) {
    dataUser.push(...user);
    console.log(dataUser);
  }
  return {
   save: (obj) => {
     save(obj)
   }
  }
};

authorizationFactory.$inject = [];

export { authorizationFactory };

