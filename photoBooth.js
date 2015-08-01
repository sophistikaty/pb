if (Meteor.isClient) {

  // Template.registerHelper('types', function(array) {
  //   imageTypes : ['Classic Photostrip', 'GIF', '3D stereo', 'Video Confessional'];
  //   filterTypes : ['No Filter', 'Black and White', 'Sepia', 'Mixed'];
  //   return array;
  // });

  var imageTypes = ['Photostrip', 'GIF', '3D stereo', 'Video'];
  var filterTypes = ['No', 'Black and White', 'Sepia', 'Mixed'];
  
  // // counter starts at 0
  // Session.setDefault('counter', 0);
  Session.setDefault('imageType', imageTypes[0]);
  Session.setDefault('filterType', filterTypes[0]);

  Template.start.helpers({

    imageTypes : ['Photostrip', 'GIF', '3D stereo', 'Video'],
    filterTypes : ['No', 'Black and White', 'Sepia', 'Mixed'],

    hello: function(){
      console.log('Hello Kaitlynn');
    },

    imageType: function () {
      return Session.get('imageType');
    },

    filterType: function () {
      return Session.get('filterType');
    },

  });

  Template.start.onRendered(function(){

      // showSelected: function(){
        var iselected = document.getElementById(Session.get('imageType'));
        iselected.classList.add('selected');

        var fselected = document.getElementById(Session.get('filterType'));
        fselected.classList.add('selected');
        console.log('selected is ', iselected, fselected );
        

      // }
  });

  Template.start.events({

    'click button.imageType': function () {

      // console.log('button clicked is this and event ', this, event.srcElement.textContent);
      Session.set('imageType', event.srcElement.textContent);

      var options  = $('li.imageType');
      for (i=0; i<options.length; i++){
        options[i].classList.remove('selected');
      }

      var selected = document.getElementById(Session.get('imageType'));
      selected.classList.add('selected');
      filter = document.getElementById('filterType');
      filter.classList.remove('hide');
    },

     'click button.filterType': function () {

      console.log('button clicked is this and event ', this, event.srcElement.textContent);
      Session.set('filterType', event.srcElement.textContent);

      var options  = $('li.filterType');
      for (i=0; i<options.length; i++){
        options[i].classList.remove('selected');
      }

      var selected = document.getElementById(Session.get('filterType'));
      selected.classList.add('selected');
    }

  });
  // see larry's storyboard
    //function to start program, display options
    //function to setup camera with selected options
    //pay screen functions?
    // preview screen placement
    //function to start camera count-down & intiate photo shutter
    //function to display final product
    //function to start printer/ share digitally
    //function to choose social share options
    //display thank you/ finished screen
    //refresh app after thank you screen

     Template.hello.helpers({

    counter: function () {
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
