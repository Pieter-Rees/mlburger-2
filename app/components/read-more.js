import Component from '@ember/component';

export default Component.extend({
  expanded: false,

  willRender(){
  },

  actions: {
    toggle() {
      this.toggleProperty('expanded');
    }
  }
});
