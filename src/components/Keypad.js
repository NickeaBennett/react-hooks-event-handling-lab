// Code Keypad Component Here
import React from "react";

function Keypad() {
    function handlePassword(event) {
        console.log("Entering password...");
    }
    return(
        <input type="password" name="password" placeholder="Enter password..." onChange={handlePassword} />
    );
}

export default Keypad;