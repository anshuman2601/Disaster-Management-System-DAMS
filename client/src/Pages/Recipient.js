import React from "react";
import Disaster from "./Disaster";
import Request from "./Request";

function Recipient () {
    return (
        <div className="recipient-page">
            <Disaster />
            <Request />
        </div>
    );
}

export default Recipient;