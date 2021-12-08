import instance from "./instance";


export const sendOne = (token) => {
    const url = "/send-notifications/sendToOne";
    return instance.post(url,token);
}

