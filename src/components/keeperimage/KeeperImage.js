import React, { useState } from "react";
import "../keeperimage/KeeperImage.css";

const KeeperImage = ({ className, source }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  console.log(source);
  return (
    <>
      {isLoading && (
        <div className="loadingMessage">
          {/* You can add any loading animation here */}
          {/* For example, you can use a spinner component or any other loading animation */}
          Loading...
        </div>
      )}
      <img
        className={className}
        onLoad={handleImageLoad}
        alt="KeeperImage"
        src={source.uri}
      />
    </>
  );
};

export default KeeperImage;
