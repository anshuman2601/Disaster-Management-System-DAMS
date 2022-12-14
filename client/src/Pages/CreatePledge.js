import React from "react";


// create a function to make a pledge for some items

function CreatePledge(items) {
  return items.map(function(item) {
    return {
      id: item.id,
      name: item.name,
      price: item.price
    };
    });
    }


export default CreatePledge;