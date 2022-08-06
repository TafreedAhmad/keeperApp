import React from "react";

function Footer(){
    var today= new Date();
    var yyyy = today.getFullYear();

    return (
    <footer>
        <p>Copyright © {yyyy}</p>
    </footer>)
}

export default Footer;