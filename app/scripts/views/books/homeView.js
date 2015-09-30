var CreateListView = Backbone.View.extend({

  tagName: 'ul',
  className: 'create-list',

  template: JST['books/list'],

  events: {
    'submit': 'createBook'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createBook: function(e) {
    e.preventDefault();
    App.contact.on('sync', function(){
      App.contact.fetch(this.serializeForm())
    });
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;

    });
    return result;
  }

});

export default CreateListView;
