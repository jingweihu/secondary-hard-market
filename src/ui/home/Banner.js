import React, {useContext} from 'react';
import {Context} from "../../store";

const Banner = () => {
  const [state, dispatch] = useContext(Context)
  const {setting} = state

  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {setting.appName}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
