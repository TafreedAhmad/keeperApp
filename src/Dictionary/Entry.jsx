import React from "react";
import Emoji from "./Emoji";
import Name from "../Name";
import Meaning from "../Meaning";

function Entry(props) {
  return (
  <div>
    <dl className="dictionary">
      <div className="term">
        <dt>
          <Emoji emoji={props.emoji} />
          <Name name={props.name} />
        </dt>
        <Meaning meaning={props.meaning} />
      </div>
    </dl>
  </div>
  )

}

export default Entry;