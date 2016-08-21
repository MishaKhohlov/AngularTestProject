/**
 * @type controller
 * @class app.Controller:AppController
 * @memberOf app
 * @description
 * Controller in which stored data about link and state. And init google map.
 */

class AppController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.links = [
      {name: 'Home', component: 'home'},
      {name: 'Contact', component: 'contact'},
      {name: 'Blog', component: 'blog'}
    ];
  }

  $onInit() {
    function mapsInit() {
      let placeObj = {lat: 50.004999, lng: 36.231844};

      let map = new google.maps.Map(document.getElementById('map'), {
        center: placeObj,
        zoom: 10
      });

      let marker = new google.maps.Marker({
        map: map,
        place: {
          location: placeObj,
          query: 'Kharkiv, Ukraine'

        },
        attribution: {
          source: 'Google Maps JavaScript API',
          webUrl: 'https://developers.google.com/maps/'
        }
      });

      let infoWindow = new google.maps.InfoWindow({
        content: 'Hello Kharkiv'
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }

    this.$timeout(mapsInit, 2000);
  }
}

AppController.$inject = ['$timeout'];

export {AppController};
