var CreateListView = Backbone.View.extend({

  tagName: 'ul',
  className: 'create-list',

  template: JST['books/list'],

  events: {
    'submit': 'createBook'
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },

});

export default CreateListView;
