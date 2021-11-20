const mongoose = require('mongoose');
const {paginate, toJSON} = require("./plugins");
const  categorySchema = mongoose.Schema({
  name:{
    type:String,
    maxlength:100,
    require:true
  },
  slug:{
    type:String,
  },

},{timestamps:true});

categorySchema.plugin(toJSON)
categorySchema.plugin(paginate)

module.exports = mongoose.model('Category', categorySchema);