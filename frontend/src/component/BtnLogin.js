import React from 'react'
import {GoogleLogin} from 'react-google-login';
const BtnLogin = () => {
    const responseGoogle = (response) => {
        const user = response.Au;
        if (response) {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = "/";
        }
    }
    return (
        <div className="btn_login">
            <GoogleLogin
                className="btn_google"
                clientId='1053130679331-v5otfnv3ru7mt3aus0hvbl200qp68pqj.apps.googleusercontent.com'
                buttonText='Login with google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            ></GoogleLogin>
        </div>
    )
}

export default BtnLogin
