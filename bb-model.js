'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');

var computer = Backbone.Model.extend({
  initialize: function() {
  	console.log('Initializing model.');
  	this.on('change', function (){
  		console.log('the values have been changed')
  	})
  }

  setRAM: function(newRAM) {
  	this.set({RAM: newRAM});
  }

  defaults : {
    RAM: " ",
    CPU: "2.2 GHZ",
    Overclock: false
  }  
});

module.exports = Note;