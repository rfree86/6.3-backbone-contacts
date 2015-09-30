import ContactsCollection from 'models/contactCollection';
import CreateContactView from 'views/books/create';
import CreateListView from 'views/books/homeView';

window.App = {};

$(document).ready(function(){
  App.contact = new ContactsCollection();

  window.createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);

  window.createListView = new CreateListView();
  $('#container').append(createListView.render().el);
});
