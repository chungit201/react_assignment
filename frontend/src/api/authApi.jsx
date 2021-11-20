import instance from "./instance";
export const signup = ( user)=>{
  let url = "/auth/register";
  return instance.post(url,user);
}

