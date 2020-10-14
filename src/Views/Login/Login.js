import React from "react";
import GoogleLogin from "react-google-login";
export default function Login({ history }) {
  const successSignIn = (response) => {
    history.push("movie-listing");
  };
  const failureSignIn = (response) => {
    alert(response.details);
  };

  return (
    <div className="login__wrapper ">
      <h1>Sign In with Google</h1>
      <div className="d-flex justify-content-center">
        <GoogleLogin
          clientId="6529502578-u83iesbeu5p7idc3s306tmd7iaf6mth0.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={successSignIn}
          onFailure={failureSignIn}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}
