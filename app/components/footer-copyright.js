import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  moment: moment(),
  currentYear: moment().year(),
});
