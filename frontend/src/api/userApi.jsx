import instance from "./instance";

export const getAll = () =>{
  const url = "/users";
  return instance.get(url);
}
export const getUser = (id) => {
  const url = "/users/" + id;
  return instance.get(url);
};

export const editUser = (id,updateBody) =>{
  const url = "/users/edit/" + id;
  return instance.post(url,updateBody);
}

export const deleteUser = (id)=>{
  const url = "users/delete/"+ id;
  return instance.post(url);
}