import React from "react";
import Disaster from "./Disaster";
import Request from "./Request";
import Response from "./Response";
import Items from "./Items";

function Donor () {
    return (
        <div className="donor-page">
            <Disaster />
            <Request />
            
            <Items />
        </div>
    );
}

export default Donor;