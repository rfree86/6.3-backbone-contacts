var Contact = Backbone.Model.extend({
  defaults: function(){
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: [],
      twitter: "",
      linkedin: "",
    };
  },

  // validate: function(attributes) {
  //   var errors = {};
  //   if(_.isEmpty(attributes.title)){
  //     errors.title = "Must have a valid title";
  //   }
  //   if(_.isEmpty(attributes.author)){
  //     errors.author = "Must have a valid author";
  //   }
  //   return _.keys(errors).length ? errors : undefined;
  // }
})

export default Contact;
