import React from "react";

export default function Header({ loggedIn }) {
    return(
        <header className="header">
            <nav>
                {loggedIn && <a href="/">Home</a>}
                {!loggedIn && <a href="/login">Log in</a>}
                {!loggedIn && <a href="/sign-up">Signup</a>}
                {loggedIn && <a href="/log-out">Logout</a>}
            </nav>
        </header>
    );
}