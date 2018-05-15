import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  navigationMenu: service(),

  actions: {
    closeModal() {
      this.toggleProperty('navigationMenu.menuButton');
      this.toggleProperty('navigationMenu.showMenu');
    }
  }
});
