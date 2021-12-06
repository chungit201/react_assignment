export const isAuthentication = () =>{
    const token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href='/login';
    }
}

export const getCarts = () => {
    if(typeof window=='undefined'){
        return false;
    }
    if(localStorage.getItem('carts')){
        return JSON.parse(localStorage.getItem('carts'));

    }else{
        return false;
    }
    
}