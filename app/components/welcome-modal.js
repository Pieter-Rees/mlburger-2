import Component from '@ember/component';

export default Component.extend({
  showModal: true,
  classNames: 'modal modal-lg welcome-modal',
  classNameBindings: ['showModal:active'],

  actions: {
    closeModal() {
      this.toggleProperty('showModal');
    }
  }
});
