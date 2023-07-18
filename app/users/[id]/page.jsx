import Link from "next/link";
import React from "react";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UsersDetails = async ({ params }) => {
  const user = await getUser(params.id);
  console.log(user);
  return (
    <>
      <div className="main-users-container">
        <div className="user-container">
          <img
            className="users-img"
            src={user.avatar}
            alt={user.first_name + " " + user.last_name}
          />
          <div className="users-data">
            <h4 className="users-text">
              {user.first_name} {user.last_name}
            </h4>
            <h4 className="users-text">{user.email}</h4>
          </div>
        </div>
      </div>
      <Link className="btn-container" href="/">
        <button className="btn-goBack">Go Back</button>
      </Link>
    </>
  );
};

export default UsersDetails;
