import { GoogleCredentials } from "../constants";
import {GoogleLogin} from 'react-google-login';

function Login(){

    const onSuccess = (res) =>
    {
        console.log("Success: ", res);
    }

    const onFailure = (res) => {
        console.log("failed");
    }

    return(
    <div id="signInButton">
        <GoogleLogin
            clientId={GoogleCredentials.clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
    )
}
export default Login;