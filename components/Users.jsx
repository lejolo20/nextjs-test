"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Users = ({ usersProp }) => {
  const router = useRouter();
  const usersCard = usersProp.map((user) => {
    return (
      <div key={user.id} className="main-users-container">
        <div
          className="users-container"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <img className="users-img" src={user.avatar} />
          <div className="users-data">
            <h4 className="users-text">{`${
              user.first_name + " " + user.last_name
            }`}</h4>
            <h5 className="users-text">{user.email}</h5>
          </div>
        </div>
      </div>
    );
  });
  return usersCard;
};

export default Users;
