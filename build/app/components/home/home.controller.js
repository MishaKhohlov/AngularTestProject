/**
 * @type controller
 * @class home.Controller:HomeController
 * @memberOf home
 * @description
 * Slider control, storage of data slides.
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

    const temporaryText = 'Vestibulum quis felis ut enim aliquam iaculis. ' +
      'Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur';
    const temporaryLink = './#/';

    this.inform = [
      {
        name: 'icon-service-1.png',
        title: 'Business Consulting',
        fullText: temporaryText,
        link: temporaryLink
      },
      {
        name: 'icon-service-2.png',
        title: 'Enterprise Application',
        fullText: temporaryText,
        link: temporaryLink
      },
      {
        name: 'icon-service-3.png',
        title: 'New Strategy',
        fullText: temporaryText,
        link: temporaryLink
      },
      {
        name: 'icon-service-4.png',
        title: 'It management',
        fullText: temporaryText,
        link: temporaryLink
      },
      {
        name: 'icon-service-5.png',
        title: 'Outsourcing',
        fullText: temporaryText,
        link: temporaryLink
      },
      {
        name: 'icon-service-6.png',
        title: 'Sales & Marketing',
        fullText: temporaryText,
        link: temporaryLink
      }
    ];

    this.count = 0;
    this.disabledSlider = false;
    let len = this.slider.length - 1;

    /**
     * @function
     * @name sliderStart
     * @memberOf home.Controller:HomeController
     * @description
     * Start slider with interval 3000ms.
     * Every 3000ms hide before photo and show next
     */
    this.sliderStart = () => {
      if (!this.disabledSlider) {
        if (this.count < len) {
          this.slider[this.count].show = false;
          ++this.count;
          this.slider[this.count].show = true;
        } else {
          this.slider[len].show = false;
          this.count = 0;
          this.slider[this.count].show = true;
        }
        this.$timeout(this.sliderStart, 3000);
      }
    };
    this.$timeout(this.sliderStart, 3000);
  }

  /**
   * @method
   * @name selectPhoto
   * @memberOf home.Controller:HomeController
   * @description
   * This method stop slider and show selected photo
   */
  selectPhoto(key) {
    if (!this.disabledSlider) {
      this.disabledSlider = true
    }
    this.slider[this.count].show = false;
    this.slider[key].show = true;
    this.count = key;
  }
}

HomeController.$inject = ['$timeout'];

export {HomeController};
