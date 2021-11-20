import mongoose from 'mongoose';
import {paginate, toJSON} from "./plugins";
const restaurentSchema = mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  img:{
    type:Array,
  },
  logo:{
    type:String,
  },
  sale:{
    type:String,
  },
  description:{
    type:String,
    maxLength:200,
  }

},{timestamps:true});

restaurentSchema.plugin(toJSON)
restaurentSchema.plugin(paginate)

const Restaurent = mongoose.model('Restaurent', restaurentSchema);
module.exports = Restaurent;