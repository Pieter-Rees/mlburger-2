import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('psychotherapeut');
  this.route('praktijk');
  this.route('informatie');
  this.route('contact');
  this.route('links');
});

export default Router;
