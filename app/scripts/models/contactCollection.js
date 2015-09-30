import Contact from 'models/contact';

var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/richard_contacts"
});

export default ContactsCollection;
