// import React, { useEffect } from 'react';

// const GoogleSignInButton = () => {
//   useEffect(() => {
//     // This is where you can initialize the Google Sign-In functionality
//     const script = document.createElement('script');
//     script.src = 'https://accounts.google.com/gsi/client';
//     script.async = true;
//     script.defer = true;
//     script.onload = () => {
//       // Initialize Google Sign-In with your configuration
//       window.gapi.load('auth2', () => {
//         window.gapi.auth2.init({
//           client_id: "244404875086-itt26e85019qabm3j5ad6gru258964f4.apps.googleusercontent.com",
//         }).then(() => {
//           console.log('Google Sign-In initialized successfully.');
//         });
//       });
//     };

//     document.body.appendChild(script);

//     return () => {
//       // Clean up if necessary
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <div id="g_id_onload"
//         data-client_id="244404875086-itt26e85019qabm3j5ad6gru258964f4.apps.googleusercontent.com"
//         data-context="signin"
//         data-ux_mode="popup"
//         data-login_uri="http://localhost:5173/"
//         data-auto_prompt="false">
//       </div>

//       <div className="g_id_signin"
//         data-type="standard"
//         data-shape="rectangular"
//         data-theme="filled_blue"
//         data-text="signin_with"
//         data-size="large"
//         data-logo_alignment="left">
//       </div>
//     </div>
//   );
// };

// export default GoogleSignInButton;