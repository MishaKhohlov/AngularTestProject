/**
 * @type controller
 * @class home.Controller:HomeController
 * @memberOf home
 * @description
 * Nothing.
 */

class HomeController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.slider = [
      {
        name: 'slide-1.jpg',
        text: 'Business works with technology',
        fullText: 'We added technology to strategy. You get the multiplier effect',
        show: true
      },
      {
        name: 'slide-2.jpg',
        text: 'Professional Consulting Services',
        fullText: 'We are the trusted advisor to the world\'s leading businesses',
        show: false
      },
      {
        name: 'slide-3.jpg',
        text: 'Broaden your market edge',
        fullText: 'We work with our clients as we do with our colleagues',
        show: false
      },
      {
        name: 'slide-4.jpg',
        text: 'We are a network of leaders',
        fullText: 'We develop unparalleled management insights',
        show: false
      }
    ];
    let count = 0;
    let len = this.slider.length - 1;
    this.sliderStart = () => {
      if (count < len) {
        this.slider[count].show = false;
        ++count;
        this.slider[count].show = true;
      } else {
        this.slider[len].show = false;
        count = 0;
        this.slider[count].show = true;
      }
      this.$timeout(this.sliderStart, 3000);
    };
    this.$timeout(this.sliderStart, 3000);
  }
  selectPhoto(key) {
    console.log(key);
  }
}

HomeController.$inject = ['$timeout'];

export {HomeController};
