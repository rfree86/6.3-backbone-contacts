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

  validate: function(attributes) {
    var errors = {};
    if(_.isEmpty(attributes.first_name)){
      return "Must have a first name";
    }
    if(_.isEmpty(attributes.last_name)){
      return "Must have a valid last name";
    }
    if(_.isEmpty(attributes.email)){
      return "Must have a valid email";
    }
    if(_.isEmpty(attributes.phone_number)){
      return "Must have a valid phone number";
    }


  }
});

export default Contact;
