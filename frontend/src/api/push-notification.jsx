import instance from "./instance";


export const sendOne = (token) => {
    const url = "/send-notifications/sendToAll";
    return instance.post(url,token);
}

