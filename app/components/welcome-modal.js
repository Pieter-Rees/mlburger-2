import Component from '@ember/component';

export default Component.extend({
  showModal: false,

  actions: {
    closeModal() {
      this.toggleProperty('showModal');
    }
  }
});
