import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Account = () => {

  // here we should query the events db  with a user _id. This will dispaly all the events created by the user. 
  const [details, setDetails] = useState({
    user : "",
    sportstype: "",
    eventTitle: "",
  });

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async  () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded);
    setDetails({
      id : decoded.user._id,
      name: decoded.user.name,
      email: decoded.user.email,
    })

  };

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
          <tr>
              <td>Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{details.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{details.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account;
