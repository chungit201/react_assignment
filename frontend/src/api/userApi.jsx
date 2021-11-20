import instance from "./instance";

export const getAll = () =>{
  const url = "/users";
  return instance.get(url);
}
export const getUser = (id) => {
  const url = "/users/" + id;
  return instance.get(url);
};
