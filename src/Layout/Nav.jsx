import React, { useEffect } from 'react';
import icons from '../assets/icons';
import { GoogleCredentials, UserInfoBeta } from '../constants';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCredentials } from '../storage/userCredentialsSlice';
import {gapi} from 'gapi-script'
import GoogleBtn from '../components/GoogleBtn';

const Nav = () => {
  const dispatch = useDispatch();
  const setGoogleCredentials = () => {
    dispatch(setUserCredentials(UserInfoBeta));
  };

  //const userInfo = useSelector((state) => state.userInfoStore.user);



  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init
  //     ({
  //       client_Id: GoogleCredentials.id,
  //       scope: ""
  //     })
  //   };
  //   console.log("ID: ",GoogleCredentials.id);
  //   gapi.load('client:auth2', start);
  // });
  
  return (
    <nav className=" bg-blue-400 py-5 h-[10vh]">
      <div className="flex flex-row justify-between gap-10 items-center max-lg:flex-col">
        <img src={icons.home} width={56} height={56} alt="domek" className="ml-2" />
        <div className=" lg:mr-2">
          <div id="signInButton">
            <GoogleBtn/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;