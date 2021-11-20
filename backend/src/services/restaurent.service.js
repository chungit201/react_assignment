import {Restaurent} from "../models";
const createRestaurent = async (restaurentBody) =>{
  return Restaurent.create(restaurentBody);
}

const queryRestaurent = async (filter,options) =>{
  Object.assign(options);
  return Restaurent.paginate(filter,options);
}

const restaurentById = async (restauID)=>{
  const restaurent = Restaurent.findOne({_id:restauID});
  return restaurent;
}

const editRestaurent = async (restauId,updateBody)=>{
  const restaurent = Restaurent.findOne({_id:restauId});

}