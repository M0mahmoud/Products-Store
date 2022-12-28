import React from "react";
import LoadingAnimation from "./LoadingAnimation";

const LoadingContent = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingContent;
