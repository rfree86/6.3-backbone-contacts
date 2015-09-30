import ContactsCollection from 'models/contactCollection';
import CreateContactView from 'views/books/create';
import CreateListView from 'views/books/homeView';

window.App = {};

$(document).ready(function(){
  App.contact = new ContactsCollection();

  window.createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);



  var listview = new CreateListView({
    collection: App.contact
  });
  listview.collection.fetch();
  listview.collection.on('sync', function(e){
  $('#container').append(listview.render().el);
});
});
