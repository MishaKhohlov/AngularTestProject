/**
 * @type controller
 * @class app.Controller:AppController
 * @memberOf app
 * @description
 * Controller in which stored data about link and state.
 */

class AppController {
  constructor() {
    this.links = [
      {name: 'Home', component: 'home'},
      {name: 'Contact', component: 'contact'},
      {name: 'Blog', component: 'blog'}
    ];
  }
}

export {AppController};
