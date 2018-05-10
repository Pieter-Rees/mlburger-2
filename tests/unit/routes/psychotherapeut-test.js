import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | psychotherapeut', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:psychotherapeut');
    assert.ok(route);
  });
});
