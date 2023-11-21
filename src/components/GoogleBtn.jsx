import React, { useEffect, useState  } from 'react'
import icons from '../assets/icons';
import { GoogleCredentials, UserInfoBeta } from '../constants';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCredentials } from '../storage/userCredentialsSlice';

const GoogleBtn = () => {

    const userInfo  = useSelector((state) => state.userInfoStore.user);
    const [isLogIn, setIsLogIn] = useState(false);
    const dispatch = useDispatch();

    const onSuccess =(res) =>
    {
        setIsLogIn(true);
        dispatch(setUserCredentials(res.profileObj));
    }

    const onFailure =(res) =>
    {
        dispatch(setUserCredentials());
        console.log("Failed, :: ", res);
    }

    const logOut=()=>
    {
        dispatch(setUserCredentials());
        setIsLogIn(false);
    }

    useEffect(() => {
        if (isLogIn) {
            // Check if userInfo is null or an empty object
            
            if (userInfo || Object.keys(userInfo).length > 0) {
                // User is logged out or userInfo is empty
                setIsLogIn(true);
            } else {

                setIsLogIn(false);
                // User is logged in, handle accordingly
            }
        }
    }, [userInfo, isLogIn]);

    useEffect(()=>{
        function start(){
          gapi.client.init
          ({
            client_Id: GoogleCredentials.id,
            scope: ""
          })
        };
        gapi.load('client:auth2', start);
      });
      
    //const renderButtonText = (userInfo!==null) ? GoogleCredentials.label_out : GoogleCredentials.label_in;
    
  return (
    <div>
        
        <GoogleLogin
            clientId={GoogleCredentials.id}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            render={(renderProps) => (
              <div >
              <button
              className="sm:GoogleBtn font-bold text-lg max-sm:Sm_GoogleBtn  "
              onClick={(!isLogIn ? renderProps.onClick : logOut)}
              disabled={renderProps.disabled}
              >
                { (isLogIn) ? (
                    <div className="custom-button ">
                        {icons.user && (
                            <img src={icons.user} width={26} height={26} alt="user icon" />
                            )}
                            {GoogleCredentials.label_out}
                    </div>
                ):
                (
                    <div  className="custom-button">
                        {icons.google && (
                            <img src={icons.google} width={26} height={26} alt="google icon" />
                            )}
                        {GoogleCredentials.label_in}
                    </div>
                )
                }
              </button>
              
            </div>
            
            )}
        />


    </div>
  )
}

export default GoogleBtn