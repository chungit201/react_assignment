import instance from "./instance";

export const addDeviceToken = (token) => {
    const url = "deviceTokens/add";
    return instance.post(url,token);
}

export const getDeviceTokens = () =>{
    const url= "/deviceTokens";
    return instance.get(url)
};

export const getDeviceToken = (id) =>{
    const url = '/deviceTokens/' + id;
    return instance.get(url);
}

export const removeDeviceTokens = (id) =>{
    const url = "/deviceTokens/delete/" + id;
    return instance.post(url);
}