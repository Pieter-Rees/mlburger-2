import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
  title: attr('string'),
  content1: attr('string'),
  content2: attr('string'),
});
