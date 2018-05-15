import Component from '@ember/component';
import moment from 'moment';
import { storageFor } from 'ember-local-storage';

export default Component.extend({
  moment: moment(),
  actualisation: storageFor('actualisation'),

  actualisationDate: null,
  formattedActualisation: null,

  willRender() {
    let now = moment()._d;

    let diff = moment(new Date(this.get('actualisation.date'))).diff(now, 'days')

    // If now localstorage is available set on now
    if (!this.get('actualisation.date')) {
      this.set('actualisation.date', now);
      this.set('actualisationDate', now);
    } else {
      if (diff <= -31) {
        this.set('actualisation.date', now);
      }
      this.set('actualisationDate', this.get('actualisation.date'));
    }

     let formattedActualisation = moment(new Date(this.get('actualisationDate'))).format("D MMM YYYY")
     this.set('formattedActualisation', formattedActualisation)



  }
});
