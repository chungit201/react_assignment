import instance from "./instance";


export const addCategory = (category) => {
    const url = "/categories/add";
    return instance.post(url,category);
}

export const getAll = () =>{
    const url= "/categories";
    return instance.get(url)
};

export const get = (id) =>{
    const url = '/categories/' + id;
    return instance.get(url);
}

export const remove = (id) =>{
    const url = "/categories/delete/" + id;
    return instance.post(url);
}