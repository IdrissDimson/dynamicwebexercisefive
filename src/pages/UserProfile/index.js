import React from "react";
import UserInformation from "../../components/UserProfileComponent";

export default function UserProfile({ user }) {
    console.log("user", user);
    return (
        <div>
            <div>UserProfile for {user.uid && user.uid}</div>
            <UserInformation email={user.email ? user.email : "Error!"}/>
        </div>
    );
}