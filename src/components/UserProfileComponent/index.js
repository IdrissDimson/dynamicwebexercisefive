import React from "react";

export default function UserProfileComponent({ email }) {
    return (
        <div>
            <div>Logged in user email is {email}</div>
        </div>
    );
}