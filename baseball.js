if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
          var ab = parseInt($("#AB").val());
          var h = parseInt($("#H").val());
                    var B2 = parseInt($("#B2").val());
                              var B3 = parseInt($("#B3").val());
                                        var HR = parseInt($("#HR").val());
          var avg = h/ab;
          console.log("B2"+B2+" B3"+B3+"HR"+HR)
          var B1 = h-(B2+B3+HR);
          var slg = (B2+B2+B3*3+HR*4+B1)/ab;
            $("#AVG").val(avg);
            $("#SLG").val(" "+slg);
      return Session.get('counter');

    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
