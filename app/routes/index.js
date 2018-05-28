import Route from '@ember/routing/route';
// import ScrollToTop from './app/mixins/scroll-to-top';

export default Route.extend( {
  model() {
    return this.store.findAll('index');
  },

  actions: {
    didTransition() {}
  }

});
