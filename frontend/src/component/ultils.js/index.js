export const isAuthentication = () =>{
    const token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href='/login';
    }
}