import EmberObject from '@ember/object';
import ScrollToTopMixin from './mixins/scroll-to-top';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll-to-top', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScrollToTopObject = EmberObject.extend(ScrollToTopMixin);
    let subject = ScrollToTopObject.create();
    assert.ok(subject);
  });
});
