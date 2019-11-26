import React from "react";

export default function Login() {
    return (
        <div>
            <form>
                <label for="loginEmail">Email</label>
                <input type="email" name="loginEmail"/>
                <label for="loginPassword">Email</label>
                <input type="password" name="loginPassword"/>
                <button>Log In</button>
            </form>
        </div>
    );
}