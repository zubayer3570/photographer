import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="ans-container">
      <div className="grid-cell">
        <h3>Difference between authorization and authentication?</h3>
        <p>
          -----Authentication is the process of verifying an user, and
          authorization is the process of verifying how much access a user has
        </p>
      </div>
      <div className="grid-cell">
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          -----Firebase is a complete backend service procided by google, and it
          is secured by google, whih is very reliable, so many developers use
          it. And the alternative to firebase for authentication are Okta,
          Firebase, JSON Web Token, Amazon Cognito, Keycloak.
        </p>
      </div>
      <div className="grid-cell">
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
        <p>
          -----Firebase provide various services like authentication,
          authoriztion, database, realtime database and other services.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
