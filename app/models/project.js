Waterline = require('waterline');

Model = Waterline.Collection.extend({

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true,
    }
  }
});

module.exports = Model;
