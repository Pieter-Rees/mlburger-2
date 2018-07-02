import Route from '@ember/routing/route';
import ScrollToTop from '../mixins/scroll-to-top';

export default Route.extend(ScrollToTop, {
  model() {
    return this.store.findAll('index');
  },

  actions: {
    didTransition() {}
  }

});
