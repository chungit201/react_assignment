import instance from "./instance";

export const getAll = () =>{
  const url = "/products";
  return instance.get(url);
}
export const addProduct = (product) =>{
  const url = "/products/add";
  return instance.post(url,product);
}
export const remove = (id) => {
  const url = "/products/delete/" + id;
  return instance.post(url);
};

