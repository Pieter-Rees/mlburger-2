import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  navigationMenu: service(),
  classNames: ['main-navigation'],

  actions: {
    toggleMenu() {
      this.toggleProperty('navigationMenu.menuButton');
      this.toggleProperty('navigationMenu.showMenu');
    },
  }
});
