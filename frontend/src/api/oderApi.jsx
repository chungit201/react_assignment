import instance from "./instance";


export const addOder = (oder) => {
    const url = "/oders/add";
    return instance.post(url,oder);
}

export const getAllOder = () =>{
    const url= `/oders`;
    return instance.get(url)
};
export const getAllOderUser = (id) =>{
    const url= `/oders?user=${id}`;
    return instance.get(url)
};

export const get = (id) =>{
    const url = '/oders/' + id;
    return instance.get(url);
}

export const remove = (id) =>{
    const url = "/oders/delete/" + id;
    return instance.post(url);
}