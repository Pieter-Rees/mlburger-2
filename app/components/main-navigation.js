import Component from '@ember/component';

export default Component.extend({
  menuButton: false,
  showMenu: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('menuButton');
      this.toggleProperty('showMenu');

    }
  }
});
