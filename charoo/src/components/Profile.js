import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Profile = () => {

  const [details, setDetails] = useState({
    id : "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    getProfil();
  }, []);

  const getProfil = async  () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded);
    setDetails({
      id : decoded.user._id,
      firstName: decoded.user.firstName,
      lastName: decoded.user.lastName,
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
              <td> First Name</td>
              <td>{details.firstName}</td>
            </tr>
            <tr>
              <td> Last Name</td>
              <td>{details.lastName}</td>
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

export default Profile;
